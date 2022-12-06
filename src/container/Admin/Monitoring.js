import React,{useState} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import {  Container,  Col, Row, Nav, Card } from "react-bootstrap";
import NavbarComp from "../../component/NavbarComp";
import AddLoker from "./AddLoker";
import MonitoringLoker from "./MonitoringLoker";
import MonitoringUser from "./MonitoringUser";


const Monitoring = (props) => {
  const [isUpdate,setIsUpdate]=useState(false)
  const [idLoker,setIdLoker]=useState(false)
  const [idUser,setIdUser]=useState(false)
  const Navigate = useNavigate();
  let { menu } = useParams();

  const handleUpdateLoker = (data) => {

    setIdLoker(data.id)
    setIsUpdate(true)
    Navigate("/Monitoring/AddLoker");


    
    
  };


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
            <Link to="/Monitoring/AddLoker">Input Loker</Link>
            <Link Link to="/Monitoring/MonitoringLoker">Monitoring Loker</Link>
            <Link Link to="/Monitoring/MonitoringUser">Monitoring User</Link>
         
          </Nav>
        </Col>

        <Col className="Col-md-4">
          {menu==="AddLoker" && <AddLoker idLoker={idLoker} isUpdate={isUpdate}/>} 
          {menu==="MonitoringLoker" && <MonitoringLoker handleUpdateLoker={handleUpdateLoker} />}
          {menu==="MonitoringUser" && <MonitoringUser />}
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default Monitoring;
