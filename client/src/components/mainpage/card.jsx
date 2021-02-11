import { useState } from 'react';
import axios from "../../helper/axiosHelper";
import { Container, Row, Col } from "react-bootstrap";

// card page

function MainPage(props) {

    return (
    <Container>
      <Row>
        <Col xs={12} md={10} lg={10}></Col>
        <div className="card rounded border-info rounded" 
        style={{width: "20rem", margin:"20px" }}>
            <div className="card-body">
                    <div>
                        <h5><strong>Name: {props.Name}</strong></h5>
                        <br />
                        <h5><strong>Caption: {props.caption}</strong></h5>
                    </div>
            </div>
            <img src={props.url} alt={props.caption} className="card-img-top" />
        </div>
      </Row>
    </Container>
    )
}

export default MainPage;
/*div className="media-content">
              <p className="title is-4">{caption}</p>
              <p className="subtitle is-6">{name}</p>
            </div> */