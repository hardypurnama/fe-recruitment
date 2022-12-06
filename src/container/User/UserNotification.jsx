import React from "react"
import {   Container,Row,Col,Nav,Card } from "react-bootstrap"
import Footer from "../../component/Footer"
import NavbarComp from "../../component/NavbarComp"





const UserNotification=()=>{
     
        return(

          
          <Container>
            <NavbarComp />
            <Row>
              <Col className="col-md-2">
              <Nav defaultActiveKey="/home" className="flex-column">
              <Card >
                <Card.Img variant="top" src="" />
              </Card>
                <Nav.Link href=" ">Profile</Nav.Link>
                <Nav.Link eventKey="Apllying">Apllying</Nav.Link>
                <Nav.Link eventKey="Notif">Notification</Nav.Link>
                <Nav.Link eventKey="Logout">Logout</Nav.Link>
                </Nav>
              </Col>

              <Col className="col-md-10">
              <Card >
                <Card.Body>
                    <Card.Text className="desc">detail notif</Card.Text>
                </Card.Body>
        </Card>
              </Col>
            </Row>
             <Footer />
          </Container>
          )
  } 

export default UserNotification;

