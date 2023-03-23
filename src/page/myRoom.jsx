import { Card, Row, Col, Input, Space, Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyRoom = () => {
  const room = [{}, {}, {},{},];

  return (
    <div>
      <Card title="Card title{}我的预约">
        {room.map(() => {
          return (
            <Card
              type="inner"
              title="一号教学楼 303"
              extra={<a href="#">extra属性</a>}
            >
              <Row>
                <Col span={8}>预约状态：成功</Col>
                <Col span={16}>预约时间段：...</Col>
                
              </Row>
              <Row>
                <Col>预约理由</Col>
              </Row>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};
export default MyRoom;
