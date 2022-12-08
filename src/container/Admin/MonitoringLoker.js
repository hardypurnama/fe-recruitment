import React,{useState,useEffect} from "react";
import { Button, Table } from "react-bootstrap";

import axios from "axios";
import {authHeader} from "../../Utils/Authentication";

const MonitoringLoker = (props) => {
  const [loker,setLoker]=useState(
  []
  )

  const handleRemove = async (data) => {
    await axios.delete(`http://localhost:3000/products/${data}`, { headers: authHeader() }).then((res) => {
      getPostAPI();
    });
  };

  const getPostAPI = () => {
    axios
      .get("http://localhost:3000/products/")

      .then((result) => {
        setLoker(result.data);
      });
  };
  useEffect(() => {
    
    getPostAPI();
  }, []);
  return (
    <Table striped bordered hover>
      <thead className="tabelComp">
        <tr>
          <th>No</th>
          <th>Nama Perusahaan</th>
          <th>Posisi</th>
          <th>Penempatan</th>
        </tr>
      </thead>
      <tbody>
        {loker &&
          loker.map((Post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{Post.nama_perusahaan}</td>
                <td>{Post.posisi}</td>
                <td>{Post.lokasi}</td>

                <td colSpan={2}>
                  <Button className="remove" onClick={() => handleRemove(Post.id)}>
                    Delete
                  </Button>
                  <Button className="update" onClick={() => props.handleUpdateLoker(Post)}>
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default MonitoringLoker;
