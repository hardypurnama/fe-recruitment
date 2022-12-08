import React, { Fragment,useState} from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import UserProfile from "../User/UserProfile";
import { useNavigate } from "react-router-dom";



const SignUp=(props)=> {
  const Navigate = useNavigate();
  const [user,setUser]=useState({
    nama: "",
    foto: "",
    username: "",
    password: "",
    email: "",
    nohp: "",
    tgl_lahir: "",
    domisili: "",
    document: "",
  })

  const handleResetSignUp = () => {
    setUser({
      nama: "",
      foto: "",
      username: "",
      password: "",
      email: "",
      nohp: "",
      tgl_lahir: "",
      domisili: "",
      document: "",
    }
      );
  };
  


  const putDataToAPIUser = () => {
    axios.put(`http://localhost:3000/Users/${user.id}`, user).then((res) => {
        handleResetSignUp();
    });
  };



 
    



  const postDataToAPIUser = () => {
    axios.post("http://localhost:3000/users/register", user).then(
      (res) => {
         handleResetSignUp();

         Navigate("/Login");
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  };

  

  const handleSubmitUser = (event) => {
    event.preventDefault();
      postDataToAPIUser();
      
      
     
      
      
  };

  const handleFormChangeSignup = (event) => {
    let Usernew = { ...user };
    
    Usernew[event.target.name] = event.target.value;
    console.log(Usernew)
    setUser(
      Usernew,
    );
  };


  return (
    <Container>
      <Form>
        <Fragment>
          <div>
            <hr></hr>
            <hr></hr>
            <p>BIODATA</p>
            <hr></hr>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" name="nama" onChange={handleFormChangeSignup} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" name="username" onChange={handleFormChangeSignup}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" name="password" onChange={handleFormChangeSignup} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicemail">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" placeholder="email" name="email" onChange={handleFormChangeSignup}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicnhp">
              <Form.Label>no hp</Form.Label>
              <Form.Control type="nhp" placeholder="no hp" name="nohp" onChange={handleFormChangeSignup}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasictglLahir" >
              <Form.Label>tgl_lahir</Form.Label>
              <Form.Control type="date" placeholder="tanggal lahir" name="tgl_lahir" onChange={handleFormChangeSignup} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicdomisili">
              <Form.Label>domisili</Form.Label>
              <Form.Control type="text" placeholder="domisili" name="domisili" onChange={handleFormChangeSignup}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDokumen">
              <Form.Label>Dokumen</Form.Label>
              <Form.Control type="gd" placeholder="dokumen" name="document" onChange={handleFormChangeSignup}/>
            </Form.Group>
          </div>
        </Fragment>

        <Button variant="primary" type="submit" onClick={handleSubmitUser} >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
