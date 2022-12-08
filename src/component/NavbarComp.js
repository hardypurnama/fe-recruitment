import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { isHr,isAdmin,isUser } from "../Utils/Authentication";
function NavbarComp() {
  const Navigate = useNavigate();
  function masuk() {
    Navigate("/Login");
  }
  function keluar() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    Navigate("/")
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Inalah LOKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3 my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            
            {!(user && token) && (
              <>
                <Button onClick={masuk} className="me-2" variant="outline-success">
                  Login
                </Button>
                <Button onClick={keluar} variant="outline-success">
                  Sign Up
                </Button>
              </>
            )}
            {(user && token)&& (
              <>
              {!isUser() && 
                <Nav.Link href="#action1">
                  <Link to="/Monitoring/AddLoker">Input Loker</Link>
                  <Nav.Link onClick={keluar}>Logout</Nav.Link>
                </Nav.Link>
              }
              if{isUser() && 
                <Nav.Link href="#action1">
                  <Link to="/Users/UserProfile">Profile</Link>
                  <Nav.Link onClick={keluar}>Logout</Nav.Link>
                </Nav.Link>

              }
                
                
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
