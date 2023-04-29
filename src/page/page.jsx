import { useState } from "react";
import { Col, Row, Card, Button, Typography } from "antd";
// import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Menu from "../components/menu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/features/user";
import axios from "axios";
const { Title } = Typography;

function Page() {
  const dispatch=useDispatch()
  let navigate = useNavigate();
  let user = useSelector((store) => {
    console.log("用户数据", store.user);
    return store.user;
  });
  return (
    <div>
      <Row>
        <Col span={2} style={{ height: "70px" }}>
          {/* <button
            onClick={() => {
              axios({
                method: "post",
                url: "http://localhost:3001/add",
                data: {
                  id: 1,
                  name: "ganyu",
                },
              }).then(
                (res) => {
                  console.log(res.data);
                },
                (err) => {
                  console.log(err);
                }
              );
            }}
          >
            post
          </button>
          <button
            onClick={() => {
              axios
                .get("http://localhost:3001/select", { id: 13266 })
                .then((res) => {
                  console.log(res.data);
                });
            }}
          >
            get
          </button> */}
        </Col>
        <Col span={18} style={{ fontSize: "40px", textAlign: "center" }}>
          <Title>欢迎来到信院教室预约系统</Title>
        </Col>
        <Col span={4}>
          {user.isLogin ? (
            <div>
              <Button
                style={{ marginRight: "20px" }}
                
              >
                {`欢迎您${user.user.userName}`}
              </Button>
              <Button
                style={{ marginRight: "20px" }}
                onClick={()=>{
                  dispatch(
                    loginUser({
                      isLogin: false,
                      isAdmain:false,
                      value: {  
                        userName: "notLogin",
                        studentId: "2019110225",
                        sex: true,
                      },
                    })
                  );
                }}
              >
                退出登录
              </Button>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                left: "70%",
                top: "45%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Button
                style={{ marginRight: "20px" }}
                onClick={() => navigate("/login")}
              >
                登陆
              </Button>
              <Button>注册</Button>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Menu></Menu>
        </Col>
        <Col span={20} style={{ backgroundColor: "#f0f0f0" }}>
          <Outlet></Outlet>
          {/* 路由占位 */}
        </Col>
      </Row>
    </div>
  );
}

export default Page;
