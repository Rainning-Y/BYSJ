import { useState } from "react";
import { Col, Row, Card } from "antd";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/menu";
import Preview from "./page/preview";
import Reserve from "./page/reservation";
import Page from "./page/page";
import Login from "./page/login";
import MyRoom from "./page/myRoom";
import Manage from "./page/manage";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="*" element={<Page />}> </Route>
        <Route path="/index" element={<Page />}>
          <Route path="reservation" element={<Reserve />}></Route>
          <Route path="preview" element={<Preview />}></Route>
          <Route path="preview/:build" element={<Preview />}></Route>
          <Route path="myroom" element={<MyRoom />}></Route>
          <Route path="manage" element={<Manage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

