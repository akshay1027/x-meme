import {Form, Button} from "react-bootstrap"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../memeForm/memeForm.css"

const MemeForm = () => {

return (

<Container>
      <Row className="">
        <Col xs={12} md={6} lg={8}>
        <br />
        <h1>Xmeme</h1>
        <br />
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Name</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Enter Name" size="lg" />
            <br />
        </Form.Group>
        </Form> 
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Caption</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Enter Caption" size="lg" />
            <br />
        </Form.Group>
        </Form> 
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">URL</Form.Label>
            <br />
            <Form.Control type="url" placeholder="Enter URL" size="lg" />
            <br />
        </Form.Group>
        </Form>

        </Col>
      </Row>
</Container>

);
}

export default MemeForm;
