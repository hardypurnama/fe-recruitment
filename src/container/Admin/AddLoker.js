import React, { useState,useEffect} from "react";
import {  Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {authHeader} from "../../Utils/Authentication";


const AddLoker =(props)=>  {
  const Navigate = useNavigate();
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
          // console.log(result);
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
         Navigate("/Monitoring/MonitoringLoker");
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  };

  const putDataToAPI = () => {
    axios.put(`http://localhost:3000/products/${loker.id}`, loker, { headers: authHeader() }).then((res) => {
        handleReset();
        Navigate("/Monitoring/MonitoringLoker");
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

  const handleUpload=(e)=>{
    const formData=new FormData();
    const image=e.target.files[0];
    formData.append("image", image);
    axios.post("http://localhost:3000/products/uploads", formData, { headers: {...authHeader(),"Content-Type": "multipart/form-data" } }).then(
      (res) => {
        let Lokernew = { ...loker, poster:res.data.data };
        setLoker(
          Lokernew,
        );
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  

  }

 
    return (
     
        <>
         <p className="section-title"> --INPUT LOKER--</p>
              <hr></hr>
              <hr></hr>
              <div className="form-add-post">
                <label htmlFor="title">Logo Perusahaan</label>
                {(loker.poster)&&
                <Card>
                  <Card.Img variant="top" src={loker.poster} />
                </Card>
                }
                <label htmlFor="title">Poster</label>
                <input type="file"  placeholder="add title" onChange={handleUpload} />
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
