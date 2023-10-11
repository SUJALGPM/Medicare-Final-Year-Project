import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import Paginatin from "./Pagination";

const HomePage = () => {
  
  //Use state for doctors list......
  const [doctors, setDoctors] = useState([]);

  //paginatin purpose 
  const [currentPage , setCurrentPage] = useState(2);
  const [postPage , setPostPage] = useState(3);

  //finding the firstpost index and lastpost
  const lastPostIndex = currentPage * postPage;
  const firstPostIndex = lastPostIndex - postPage;

  const currentPosts =  doctors.slice(firstPostIndex,lastPostIndex);


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
      <div className='backimg_1' style={{ minHeight: "100%" }}>
        {/* <h3 className='text-center'>{'<<<'}Doctors don't just treat illnesses; they heal with their expertise and care{'>>>'}</h3> */}
        <Row style={{paddingTop: 30}}>
          {currentPosts && currentPosts.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
        <div className="d-flex justify-content-center align-items-center  my-4" style={{height:"100px"}}>
          <Paginatin totalPosts = {doctors.length} postPage = {postPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
