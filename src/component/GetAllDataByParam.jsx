import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "antd";
import "../../src/App.css";

function GetAllDataByParam() {
  const [photos, setUsers] = useState(null);

  const { data } = useParams();
  console.log(data);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${data}?_start=0&_limit=20`
      );
      console.log(response);
      console.log("ALLOHA");

      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate(`/detail/${content.id}`);
  };

  return (
    <Row gutter={[24, 24]}>
      {photos?.map((photos) => (
        <Col
          onClick={() => {
            navigateAddress(photos);
          }}
          className="content1"
          span={23}
        >
          <p key={photos.id}>{photos.title}</p>
          <p key={photos.id}>{photos.name}</p>
          <img src={photos.thumbnailUrl} />
        </Col>
      ))}
    </Row>
  );
}

export default GetAllDataByParam;
