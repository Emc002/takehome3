import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListAllData from "./ListAllData";
import { Row, Col } from "antd";
import "../../src/App.css";
import Navbar from "./Navbar";

function GetAllData() {
  return (
    <Row>
      <Row gutter={[24, 0]}>
        <Col className="navbar" span={24}>
          <Navbar />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col className="garis" span={9}>
          <ListAllData />
        </Col>
        <Col className="garis" span={9}>
          <Outlet />
        </Col>
      </Row>
    </Row>
  );
}

export default GetAllData;
