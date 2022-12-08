import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "antd";
import "../../src/App.css";

function GetAllDataByParam() {
  const [paramdata, setUsers] = useState(null);

  const { data } = useParams();
  console.log(data);

  const getParamData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${data}?_start=0&_limit=20`
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParamData();
  }, []);

  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate(`/detail/${content.id}`);
  };

  return (
    <Row gutter={[24, 24]}>
      {paramdata?.map((paramdata) => (
        <Col
          onClick={() => {
            navigateAddress(paramdata);
          }}
          className="content1"
          span={23}
        >
          <p key={paramdata.id}>{paramdata.title}</p>
          <p key={paramdata.id}>{paramdata.name}</p>
          <img src={paramdata.thumbnailUrl} />
        </Col>
      ))}
    </Row>
  );
}

export default GetAllDataByParam;
