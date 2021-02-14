
import axios from "../../helper/axiosHelper";
import { Container, Row, Col } from "react-bootstrap";

// card page

function MainPage(props) {

    return (
    <Container>
      <Row>
        <Col xs={12} md={10} lg={10}></Col>
        <div className="card rounded rounded" 
        style={{width: "20rem", margin:"20px", padding:"12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}>
            <div className="card-body">
                    <div style={{marginLeft:"-10px"}}>
                        <h5>{props.Name}</h5>
                        <h4><strong>{props.caption}</strong></h4>
                    </div>
            </div>
            <img src={props.url} alt={props.caption} className="card-img-top" loading="lazy"/>
        </div>
      </Row>
    </Container>
    )
}

export default MainPage;

  