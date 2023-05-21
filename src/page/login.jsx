import { Card, Row, Col, Input, Space, Button, Modal, Carousel, Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/features/user";
import axios from 'axios';

const tabList = [
  {
    key: "tab1",
    tab: "登录",
  },
  {
    key: "tab2",
    tab: "注册",
  },
];

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      navigate("/index");
    }, 3000);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const contentList = {
    tab1: (
      <div>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <Input type="text" addonBefore="账号:" value={name} onChange={(e) => { setName(e.target.value) }} />
          <Input type="password" addonBefore="密码:" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <Button
            type="primary"
            onClick={() => {
              axios.post('http://localhost:3000/login', {
                username: name,
                password: password
              })
                .then((res) => {
                  if (res.status === 200) {
                    showModal();
                  }
                })
                .catch((err) => {
                  alert("用户名或密码错误")
                  console.log(err);
                });
              dispatch(
                loginUser({
                  isLogin: true,
                  isAdmain: name === "admain" ? true : false,
                  value: {
                    userName: name,
                    studentId: "2019110225",
                    sex: true,
                  },
                })
              );
            }}
          >
            登录
          </Button>
        </Space>
      </div>
    ),
    tab2: (
      <div>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <Input type="text" addonBefore="学生邮箱:" />
          <Input type="text" addonBefore="账号:" value={name} onChange={(e) => { setName(e.target.value) }} />
          <Input type="password" addonBefore="密码:" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <Input type="password" addonBefore="请再次输入密码:" />
          <Button
            type="primary"
            onClick={() => {
              axios.post('http://localhost:3000/register', {
                username: name,
                password: password
              })
                .then((res) => {
                  if (res.status === 200) {
                    console.log(res)
                    showModal();
                  }
                })
                .catch((err) => {
                  alert("账户已存在")
                  console.log(err);
                });

              dispatch(
                loginUser({
                  isLogin: true,
                  isAdmain: name === "admain" ? true : false,
                  value: {
                    userName: name,
                    studentId: "2019110225",
                    sex: true,
                  },
                })
              );
            }}
          >
            注册并登录
          </Button>
        </Space>
      </div>
    ),
  };
  const contentStyle = {
    margin: "80px 20px 20px 20px",
    height: '285px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Row>
      <Col span={16}>
        <Carousel >
          <div>
            <h3 style={contentStyle}>
              <Image src="https://www.jzci.edu.cn/images/zhuye/2022-12-26d.jpg"></Image>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src="https://www.jzci.edu.cn/images/zhuye/2020-4-29b.jpg"></Image>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src="https://www.jzci.edu.cn/images/zhuye/2020-4-29b.jpg"></Image>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src="https://www.jzci.edu.cn/images/zhuye/2020-4-29b.jpg"></Image>
            </h3>
          </div>
        </Carousel>
      </Col>
      <Col span={8}>
        <Card
          style={{
            position: "relative",
            top: "80px",
            width: "80%",
          }}
          title="欢迎来到信息学院教室预约系统"
          extra={<a href="#">更多</a>}
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={onTab1Change}
        >
          {contentList[activeTabKey1]}
        </Card>
      </Col>
      <Modal
        title="登录成功！！！"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>登录成功,3s后跳转</p>
      </Modal>
    </Row>
  );
};
export default Login;
