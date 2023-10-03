import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Divider, Form, Input, Row, TimePicker, message, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import moment from "moment";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // update doc ==========
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
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
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  // update doc ==========

  //getDOc Details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      {doctor && (
        <div className="backimg_1" style={{ justifyContent: 'center', alignItems: "center", display: 'flex', minHeight: '100%' }}>
          <Form onFinish={handleFinish} className="register-form2" initialValues={{
            ...doctor,
            timings: [
              moment(doctor.timings[0], "HH:mm"),
              moment(doctor.timings[1], "HH:mm"),
            ],
          }}
          >
            <h3 className="text-center">Update Doctor Profile</h3>
            <hr />
            <Divider style={{ borderColor: 'black' }}>Personal Details</Divider>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="First Name" name="firstName" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter First Name" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" name="lastName" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Last Name" required />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Phone No" name="phone" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Phone-no" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Email" name="email" required rules={[{ required: true }]}>
                  <Input type="email" placeholder="Enter Your Email" required />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Website" name="website" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Your Website" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Address" name="address" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter clinic address" required />
                </Form.Item>
              </Col>
            </Row>
            <Divider style={{ borderColor: 'black' }}>Professional Details</Divider>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Specialization" name="specialization" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Your Specialization" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Experience" name="experience" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Your Experience" required />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Fees Per Cunsaltation" name="feesPerCunsaltation" required rules={[{ required: true }]}>
                  <Input type="text" placeholder="Enter Your Fees" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Timings" name="timings" required rules={[{ required: true }]}>
                  <TimePicker.RangePicker format="HH:mm" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item style={{ marginLeft: 185 }}>
              <Button type='primary' htmlType='submit' shape='round' size='large' style={{ width: "300px" }}>Update</Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
