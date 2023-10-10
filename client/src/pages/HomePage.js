import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  
  //Use state for doctors list......
  const [doctors, setDoctors] = useState([]);

  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

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

  //Render-Fucntion..........
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <div className='backimg_1' style={{ minHeight: "100%" ,border:"10px solid red"}}>
        {/* <h3 className='text-center'>{'<<<'}Doctors don't just treat illnesses; they heal with their expertise and care{'>>>'}</h3> */}
        <Row style={{paddingTop: 30}}>
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
      </div>
    </Layout>
  );
};

export default HomePage;
