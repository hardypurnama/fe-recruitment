import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [FormLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormLogin({ ...FormLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    axios.post("http://localhost:3000/users/login", FormLogin).then(
      (res) => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data.username));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          return navigate("/");
        }
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="User Name" name="username" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
