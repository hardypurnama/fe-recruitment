import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const MonitoringUser = (props) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead className="tabelComp">
          <tr>
            <th>No</th>
            <th>Nama Kandidat</th>
            <th>Nama Perusahaan</th>
            <th>Job Lowongan</th>
            <th>Penempatan</th>
            <th>Status</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((Post, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{Post.title}</td>
                  <td>{Post.body}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td colSpan={2}>
                    <Button className="remove" onClick={() => props.remove(Post.id)}>
                      Delete
                    </Button>
                    <Button className="update" onClick={() => props.update(Post)}>
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MonitoringUser;
