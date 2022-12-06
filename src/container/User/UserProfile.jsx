import React from "react";
import {Form,Container,Button,Row,Col,Nav,Card} from 'react-bootstrap';
import Footer from "../../component/Footer";
import NavbarComp from "../../component/NavbarComp";

function UserProfile() {
  return (
    
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
        <Form>
            <div>
            <hr></hr>
            <hr></hr>
                <p>BIODATA</p>
                <hr></hr>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicNama">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control type="nama" placeholder="Nama Lengkap" />
      </Form.Group>

   
      <Form.Group className="mb-3" controlId="formBasicAlamat">
        <Form.Label>Alamat</Form.Label>
        <Form.Control type="Alamat" placeholder="Alamat" />
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicTempatLahir">
        <Form.Label>Tempat Lahir</Form.Label>
        <Form.Control type="tempat" placeholder="Tempat Lahir" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTglLahir">
        <Form.Label>Tanggal Lahir</Form.Label>
        <Form.Control type="tgllahir" placeholder="TanggalLahir" />
      </Form.Group>

     

      
      <Form.Group className="mb-3" controlId="formBasicnhp">
        <Form.Label>no hp</Form.Label>
        <Form.Control type="nhp" placeholder="no hp" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDokumen">
        <Form.Label>Dokumen</Form.Label>
        <Form.Control type="gd" placeholder="dokumen" />
      </Form.Group>

            </div>
      <Button variant="primary" type="submit">
        Save
      </Button>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </Col>
      </Row>

    <Footer />
    </Container>
    
  );
}

export default UserProfile;