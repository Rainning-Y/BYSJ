import { Card, Row, Col, Input,Space,Button } from "antd";
import { useState } from "react";
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
        <Button type="primary">登录</Button>
      </Space>
    </div>
  ),
  tab2: <p>content2</p>,
};

const Login = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
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
    </Row>
  );
};
export default Login;
