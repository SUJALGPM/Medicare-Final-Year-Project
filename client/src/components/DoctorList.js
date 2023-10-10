import React from "react";
import { Card, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card hoverable className="doctor-card"
        title={<h3 className="card-title">Dr. {doctor.firstName} {doctor.lastName}</h3>}
        style={{ width: 290, height: 350, marginLeft: 45, border: '1px solid black', textDecoration: 'none', marginTop: 15, cursor: 'pointer' }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
        <div>
          <p style={{ fontSize: 20, color: 'black' }}><b>Specialization</b> {doctor.specialization}</p>
          <Divider style={{ borderColor: 'black' }}></Divider>
          <p style={{ fontSize: 20, color: 'black' }}><b>Experience</b> {doctor.experience}</p>
          <Divider style={{ borderColor: 'black' }}></Divider>
          <p style={{ fontSize: 20, color: 'black' }}><b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}</p>
          <Divider style={{ borderColor: 'black' }}></Divider>
          <p style={{ fontSize: 20, color: 'black' }}><b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}</p>
        </div>
      </Card>
    </>
  );
};

export default DoctorList;
