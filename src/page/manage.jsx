import { Card, Row, Col, Input, Space, Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addReservation } from "../store/features/MyReservation";
const Manage = () => {
  const dispatch = useDispatch();
  let user = useSelector((store) => store.user.user);
  let rooms = useSelector((store) => {
    return store.MyReservation;
  });
  console.log(user);
  rooms = Object.values(rooms);
  console.log(Object.values(rooms));
  return (
    <div>
      <Card title={`${user.userName}的预约`}>
        {rooms.map((item, index) => {
          return (
            <Card
              type="inner"
              title={`${item.build}${item.id}`}
              extra={
                <Space>
                  {" "}
                  <a
                    href="#"
                    onClick={() => {
                      dispatch(
                        addReservation({
                          value: {
                            id: item.id,
                            build: item.build,
                            time: item.time,
                            text: item.text,
                            user: item.user,
                            review: "审核通过",
                          },
                        })
                      );
                      console.log("你点了预约通过");
                    }}
                  >
                    通过预约
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      dispatch(addReservation({
                        value: {
                          id: item.id,
                          build: item.build,
                          time: item.time,
                          text: item.text,
                          user: item.user,
                          review: "审核未通过",
                        },
                      }));
                      console.log("你点了拒绝预约");
                    }}
                  >
                    拒绝预约
                  </a>
                </Space>
              }
              key={index}
            >
              <Row>
                <Col span={8}>预约状态：{item.review}</Col>
                <Col span={8}>预约时间段：...</Col>
                <Col span={8}>预约人：{item.user}</Col>
              </Row>
              <Row>
                <Col>预约理由:{item.text}</Col>
              </Row>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};
export default Manage;