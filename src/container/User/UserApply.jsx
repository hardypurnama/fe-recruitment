import React,{useState,useEffect} from "react";
import { Container, Table, Row, Col, Nav, Card } from "react-bootstrap";
import axios from "axios";
import Footer from "../../component/Footer";
import { getUser,authHeader } from "../../Utils/Authentication";

const UserApply = (props) => {
  const [kandidat,setKandidat]=useState([])
  
  useEffect(() => {
    const getPostAPI = () => {
      const curUser=getUser()
      axios
        .get("http://localhost:3000/kandidats/byuser/"+curUser.id, { headers: authHeader() })
        .then((result) => {
          setKandidat(result.data);
          console.log(kandidat)
        });
    };
    getPostAPI();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="col-md-10">
          <Table striped bordered hover>
            <thead className="tabelComp">
              <tr>
                <th>No</th>
                <th>Nama Perusahaan</th>
                <th>Posisi</th>
                <th>Penempatan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {kandidat.length > 0 &&
                kandidat.map((Post, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{Post.nama_perusahaan}</td>
                      <td>{Post.posisi}</td>
                      <td>{Post.lokasi}</td>
                      <td>APPLY</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserApply;
