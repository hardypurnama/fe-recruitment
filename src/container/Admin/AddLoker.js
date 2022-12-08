import React, { useState,useEffect} from "react";
import {  Card } from "react-bootstrap";
import axios from "axios";

import {authHeader} from "../../Utils/Authentication";


const AddLoker =(props)=>  {
const [loker,setLoker]=useState({
    poster: "",
    nama_perusahaan: "",
    posisi: "",
    lokasi: "",
    description: "",
  })

 

  const handleReset = () => {
    setLoker({
        poster: "",
        nama_perusahaan: "",
        posisi: "",
        lokasi: "",
        description: "",
    }
      );
  };

  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("http://localhost:3000/products/" + props.idLoker)

        .then((result) => {
          setLoker(result.data);
          console.log(result);
        });
    };
    if(props.isUpdate){
        getPostAPI();
    }
    
  }, []);


  const postDataToAPI = () => {
    axios.post("http://localhost:3000/products", loker, { headers: authHeader() }).then(
      (res) => {
         handleReset();
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  };

  const putDataToAPI = () => {
    axios.put(`http://localhost:3000/products/${loker.id}`, loker, { headers: authHeader() }).then((res) => {
        handleReset();
    });
  };

  const handleSubmit = () => {
    if (props.isUpdate) {
     putDataToAPI();
    } else {
      postDataToAPI();
    }
  };

  const handleFormChange = (event) => {
    let Lokernew = { ...loker };
    
    Lokernew[event.target.name] = event.target.value;
    setLoker(
      Lokernew,
    );
  };

 
    return (
     
        <>
         <p className="section-title"> --INPUT LOKER--</p>
              <hr></hr>
              <hr></hr>
              <div className="form-add-post">
                <label htmlFor="title">Logo Perusahaan</label>
                <Card>
                  <Card.Img variant="top" src=" + " /> +
                </Card>
                <label htmlFor="title">Nama Perusahaan</label>
                <input type="text" value={loker.nama_perusahaan} name="nama_perusahaan" placeholder="add title" onChange={handleFormChange} />
                <label htmlFor="body">Posisi</label>
                <input type="body" value={loker.posisi} name="posisi" placeholder="add body" onChange={handleFormChange}></input>
                <label htmlFor="title">Penempatan</label>
                <input type="body" value={loker.lokasi} name="lokasi" placeholder="add body" onChange={handleFormChange}></input>
                <label htmlFor="title">Deskripsi</label>
                <input type="body" value={loker.description} name="description" placeholder="add body" onChange={handleFormChange}></input>
                <button className="btn-submit" onClick={handleSubmit}>
                  simpan
                </button>
              </div>
        </>
             
         
      
    );
  }


export default AddLoker;
