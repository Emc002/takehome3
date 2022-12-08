import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Row, Col } from "antd";
import "../../src/App.css";

function Detail() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  console.log(posts.body);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (response.status === 200) {
        setPosts(response.data);
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Row gutter={[48, 24]}>
      <Col className="detailContent" span={23}>
        <p>
          <b>{posts.title}</b>
        </p>
        <p>
          {posts.body} {console.log(posts)}
        </p>
      </Col>
    </Row>
  );
}

export default Detail;
