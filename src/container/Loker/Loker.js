import React, {useEffect,useState}  from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

// import { Button,Card,Container } from "react-bootstrap";
import SubmitLoker from "../../component/SubmitLoker";

// import './Loker.css'



const Loker =()=> {
    const [loker,setLoker]=useState(
        []
        )
    useEffect(() => {
        const getPostAPI = () => {
          axios
            .get("http://localhost:3000/products/")
    
            .then((result) => {
              setLoker(result.data);
              console.log(result);
            });
        };
        getPostAPI();
      }, []);
    return (
      <Container>
        <Row>
          {loker &&
            loker.map((Post) => {
              return (
                <Col sm="3">
                  <SubmitLoker key={Post.id} data={Post} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }


export default Loker;
