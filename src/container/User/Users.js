import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Col, Row, Nav, Card } from "react-bootstrap";
import NavbarComp from "../../component/NavbarComp";
import UserProfile from "./UserProfile";
import UserApply from "./UserApply";
import UserNotification from "./UserNotification";

const Users = (props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  //   const [idUser,setIdUser]=useState(false)
  //   const [idUser,setIdUser]=useState(false)
  const Navigate = useNavigate();
  let { menu } = useParams();

  //   const handleUpdateUser = (data) => {

  //     setIdUser(data.id)
  //     setIsUpdate(true)
  //     Navigate("/Users/UserApply");

  //   };

  return (
    <>
      <NavbarComp />
      <Container>
        <Row>
          <Col className="col-md-2">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Card>
                <Card.Img variant="top" src=" + " />
              </Card>
              <Link to="/Users/UserProfile">User Profile</Link>
              <Link Link to="/Users/UserApply">
                User Apply
              </Link>
              <Link Link to="/Users/UserNotification">
                User Notification
              </Link>
            </Nav>
          </Col>

          <Col className="Col-md-4">
            {menu === "UserProfile" && <UserProfile />}
            {menu === "UserApply" && <UserApply />}
            {menu === "UserNotification" && <UserNotification />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
