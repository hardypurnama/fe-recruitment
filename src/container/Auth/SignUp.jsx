import React, { Fragment } from "react";
import { Form, Container, Button } from "react-bootstrap";

function SignUp() {
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
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="nama" placeholder="Nama Lengkap" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAlamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="Alamat" placeholder="Alamat" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTempatLahir">
              <Form.Label>Tempat Lahir</Form.Label>
              <Form.Control type="tempat" placeholder="Tempat Lahir" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTglLahir">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control type="tgllahir" placeholder="TanggalLahir" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicnhp">
              <Form.Label>no hp</Form.Label>
              <Form.Control type="nhp" placeholder="no hp" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDokumen">
              <Form.Label>Dokumen</Form.Label>
              <Form.Control type="gd" placeholder="dokumen" />
            </Form.Group>
          </div>
        </Fragment>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
