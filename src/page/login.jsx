import { Card, Row, Col, Input, Space, Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/features/user";
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
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      navigate("/index");
    }, 300);
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
          <Input type="text" addonBefore="账号:" />
          <Input type="text" addonBefore="密码:" />
          <Button
            type="primary"
            onClick={() => {
              showModal();
              dispatch(
                loginUser({
                  isLogin: true,
                  value: {
                    userName: "jackandRose",
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
    tab2: <p>content2</p>,
  };
  return (
    <Row>
      <Col span={14}></Col>
      <Col span={10}>
        <Card
          style={{
            position: "relative",
            top: "80px",
            width: "80%",
          }}
          title="welcome to my project"
          extra={<a href="#">More</a>}
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
