import React from "react"
import {   Container,Table,Row,Col,Nav,Card } from "react-bootstrap"
import Footer from "../../component/Footer"
import NavbarComp from "../../component/NavbarComp"





const UserApply=(props)=>{
     
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
              <Table striped bordered hover>
              <thead className="tabelComp">
                <tr>
                  <th >No</th>
                  <th >Nama Perusahaan</th>
                  <th >Posisi</th>
                  <th >Penempatan</th>
                  <th >Status</th>
                </tr>
               </thead>
                <tbody>
                {props.data && props.data.map((Post,i) =>{
                       return(
                <tr>
                <td >{i+1}</td>
                <td >{Post.title}</td>
                <td >{Post.body}</td>
                <td >Bandung</td>
                <td >15</td>
                </tr>
                          )
                      })
                  }
                  </tbody>
                </Table>
              </Col>
            </Row>
             <Footer />
          </Container>
          )
  } 

export default UserApply;

