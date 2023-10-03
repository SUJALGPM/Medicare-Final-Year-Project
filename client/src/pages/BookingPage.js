import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, DatePicker, message, TimePicker, Button, Divider } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ============ handle availiblity
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  // =============== booking function==========================
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="common_bacKImg" style={{ minHeight: '100%' }}>
        <h3 className="text-center">{'<<<<'}Booking Page{'>>>>'}</h3>
        <div className="container w-75 mt-5 pl-5">
          <Card className='fant' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            {doctors && (
              <div className="border border-black text-center">
                <h4>Dr.{doctors.firstName} {doctors.lastName}</h4>
                <h4>Fees : {doctors.feesPerCunsaltation}</h4>
                <h4>
                  Timings : {doctors.timings && doctors.timings[0]} -{" "}
                  {doctors.timings && doctors.timings[1]}{" "}
                </h4>
                <Divider style={{ borderColor: 'black' }}></Divider>
                <div className="d-flex flex-column w-75" style={{ marginLeft: 80 }}>
                  <DatePicker aria-required={"true"} className="m-2" format="DD-MM-YYYY" onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                  }} />
                  <TimePicker aria-required={"true"} format="HH:mm" className="mt-2" onChange={(value) => {
                    setTime(moment(value).format("HH:mm"));
                  }} />
                  <Button className="btn btn-warning mt-2 mb-3" onClick={handleAvailability} style={{ borderRadius: "10px" }}> Check Availability </Button>
                  <Button className="btn btn-dark mb-5" onClick={handleBooking} style={{ borderRadius: "10px" }}>Book Now</Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
