import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailLoker() {
  const [Detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("http://localhost:3000/products/" + id)

        .then((result) => {
          setDetail(result.data);
          console.log(result);
        });
    };
    getPostAPI();
  }, []);

  return (
    <Container>
      {Detail && (
        <Card>
          <Card.Header as="h5">{Detail.nama_perusahaan}</Card.Header>
          <Card.Body>
            <Card.Title>{Detail.posisi}</Card.Title>
            <Card.Text>{Detail.description}</Card.Text>
            <Button variant="primary">Apply</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default DetailLoker;
