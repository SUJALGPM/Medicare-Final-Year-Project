import React from "react";
import { Form, Input, message, Divider, Button } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <div className="background_image" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Form onFinish={onfinishHandler} className="register-form" >
          <h3 className="text-center effect">Login Form</h3>
          <hr />
          <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter email" }]}>
            <Input type="email" placeholder="Enter your email" required />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, type: "password", message: "Please enter password" }]}>
            <Input.Password type="password" placeholder="Enter your password" required />
          </Form.Item>
          <Form.Item style={{ marginLeft: 150 }}>
            <Button type='primary' htmlType='submit' shape='round' size='large'>Submit</Button>
          </Form.Item>
          <Divider style={{ borderColor: 'black' }}>Already have an account?</Divider>
          <Form.Item style={{ marginLeft: 130 }}>
            <NavLink to="/register" className="text-dark magic" style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>GO TO REGISTER</NavLink>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;

