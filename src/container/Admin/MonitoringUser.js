import React, { useState, useEffect } from "react";
import { Button, Container, Dropdown, ListGroup, Table } from "react-bootstrap";
import axios from "axios";
import { getUser, authHeader } from "../../Utils/Authentication";

const MonitoringUser = (props) => {
  const [kandidat, setKandidat] = useState([]);

  useEffect(() => {
    const getPostAPI = () => {
      const curUser = getUser();
      axios.get("http://localhost:3000/kandidats/byuser/" + curUser.id, { headers: authHeader() }).then((result) => {
        setKandidat(result.data);
        console.log(kandidat);
      });
    };
    getPostAPI();
  }, []);

  // const handleChangeStatus{

  // }

  return (
    <Container>
      <Table striped bordered hover>
        <thead className="tabelComp">
          <tr>
            <th>No</th>
            <th>Nama Kandidat</th>
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
                  <td>{Post.title}</td>
                  <td>{Post.nama_perusahaan}</td>
                  <td>{Post.posisi}</td>
                  <td>{Post.lokasi}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {Post.status}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Test</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Interview</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Reject</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Lulus</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>

                  {/* <td colSpan={2}>
                    <Button className="remove" onClick={() => props.remove(Post.id)}>
                      Delete
                    </Button>
                    <Button className="update" onClick={() => props.update(Post)}>
                      Update
                    </Button>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MonitoringUser;
