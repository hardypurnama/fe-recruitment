import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Button,
  Container,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { isUser, getUser, authHeader } from "../Utils/Authentication";
import axios from "axios";
import "./NavbarComp.css";
import bell from "../img/bell.svg";
function NavbarComp() {
  const Navigate = useNavigate();
  function masuk() {
    Navigate("/Login");
  }
  function keluar() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Navigate("/Login");
  }
  function signup() {
    
    Navigate("/SignUp");
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [pesan, setPesan] = useState([]);
  const [count, setCount] = useState(0);
  const getPostAPI = () => {
    const curUser = getUser();
    if(curUser){
    axios
      .get("https://backend-recruitment-production.up.railway.app/notifikasi/byuser/" + curUser.id, {
        headers: authHeader(),
      })
      .then((result) => {
        const data = result.data;
        const unread = data.filter(function (el) {
          return el.status_notif === false;
        });
        setPesan(result.data);
        setCount(unread.length);

        console.log(result);
      });
    }
  };
  useEffect(() => {
    getPostAPI();
  }, []);

  const handleRead = (data) => {
    data.status_notif = true;
    axios
      .put(`https://backend-recruitment-production.up.railway.app/notifikasi/${data.id}`, data, {
        headers: authHeader(),
      })
      .then((res) => {
        getPostAPI();
      });
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Inalah LOKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end flex-grow-1 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!(user && token) && (
              <>
                <Button
                  onClick={masuk}
                  className="me-2"
                  variant="outline-success"
                >
                  Login
                </Button>
                <Button onClick={signup} variant="outline-success">
                  Sign Up
                </Button>
              </>
            )}
            {user && token && (
              <>
                {!isUser() && (
                  <Nav.Link href="#action1">
                    <Link className="user" to="/Monitoring/AddLoker">
                      Input Loker
                    </Link>
                    <Link className="user" onClick={keluar}>
                      Logout
                    </Link>
                  </Nav.Link>
                )}
                {isUser() && (
                  <Nav.Link href="#action1">
                      <Dropdown as={NavItem}>
                        <Dropdown.Toggle style={{ width: "20px" }} as={NavLink}> 
                        
                        <img class="imgnotif"src={bell} />
                            
                          {count}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {pesan.length > 0 &&
                            pesan.map((Post, i) => (
                              <Dropdown.Item onClick={handleRead(Post)}>
                                {Post.deskripsi}
                              </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                      </Dropdown>

                    <Link className="user" to="/Users/UserProfile">
                      Profile
                    </Link>
                    <Link className="user" onClick={keluar}>
                      Logout
                    </Link>
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
