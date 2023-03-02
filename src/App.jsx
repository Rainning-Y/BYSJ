import { useState } from "react";
import { Col, Row, Card } from "antd";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/menu";
import Preview from "./page/preview";
import Reserve from "./page/reservation";

function App() {
  return (
    <div >
      <Row>
        <Col span={24} style={{ height: "70px" }}></Col>
      </Row>
      <Row>
        <Col span={4}>
          <Menu></Menu>
        </Col>
        <Col span={20} style={{backgroundColor:'#f0f0f0'}}>
          <Routes>
            <Route path="/reservation" element={<Reserve />}></Route>
            <Route path="/preview" element={<Preview />}></Route>
            <Route path="/buildOne" element={<Preview />}></Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
