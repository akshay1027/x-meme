import {Form, Button, Toast} from "react-bootstrap"
import React from "react";
import {useState} from 'react';
import axios from "../../helper/axiosHelper";

import { Container, Row, Col } from "react-bootstrap";


const MemeForm = () => {
    
    // handling state
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [error, setError] = useState("");
    
    // function to send data
    const handleClick = async() =>{
        
        try{
            if(url==="" || caption==="" || name===""){
                throw 'error';
            }
            await axios.post('http://localhost:8081/memes', {
                    name, url, caption
            });
            window.location.reload();
        }
        catch(e) {
            if(e==='error'){
                setError("Please submit valid input");
            }
            setTimeout(()=>{
                setError("")
            }, 2000)
            return;
        }
    }

        /*// post http request using axios to /memes
        await axios.post('memes', {
            name, caption, url
        }); 
        
        //to reload website
        window.location.reload(); 
    }
 */
return (

<Container>
      <Row>
        <Col xs={12} md={6} lg={8}>
        <br />
        <h1>Meme Stream</h1>
        <br />
        <br />
        <Toast show={error!==""} onClose={()=>setError("")} style={{position: "absolute", zIndex:999, backgroundColor:"crimson", color:'white', marginTop:"-50px"}}>
                <Toast.Body>{error}</Toast.Body>
        </Toast>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label size="lg">Name</Form.Label>
            <br />
            <Form.Control type="search" placeholder="Enter Name" size="lg" 
             onChange={(e)=>setName(e.target.value)} 
             value={name}
            />
            <br />
        </Form.Group>
        </Form> 
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label size="lg">Caption</Form.Label>
            <br />
            <Form.Control type="search" placeholder="Enter Caption" size="lg" 
             onChange={(e)=>setCaption(e.target.value)} 
             value={caption}
            />
            <br />
        </Form.Group>
        </Form> 
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label size="lg">URL</Form.Label>
            <br />
            <Form.Control type="search" placeholder="Enter URL" size="lg" 
             onChange={(e)=>setUrl(e.target.value)} 
             value={url}
            />
            <br />
        </Form.Group>
        </Form>

        <Button className="btn btn-primary" onClick={handleClick}>Submit</Button>
        </Col>
      </Row>
</Container>

);
}

export default MemeForm;
