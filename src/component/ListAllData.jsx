import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "antd";
import "../../src/App.css";

function ListAllData() {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);

      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate(`/detail/${content.id}`);
  };

  return (
    <Row gutter={[24, 24]}>
      {users?.map((users) => (
        <Col
          className="content"
          onClick={() => {
            navigateAddress(users);
          }}
          span={23}
        >
          <p key={users.id}>{users.title}</p>
        </Col>
      ))}
    </Row>
  );
}

export default ListAllData;
