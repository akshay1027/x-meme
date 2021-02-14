import {Form, Button, Toast} from "react-bootstrap"
import React from "react";
import {useState} from 'react';
import axios from "../../helper/axiosHelper";


import { Container, Row, Col } from "react-bootstrap";
const dotenv = require('dotenv')

dotenv.config()



const MemeForm = () => {
    
    // handling state
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [error, setError] = useState("");
    

    // function to send data
    const handleClick = async() =>{
        
        const server1 = process.env.NODE_ENV === "production"
        ? "https://akshayrr-xmeme.herokuapp.com/memes"
        : "http://localhost:8081/memes";

        try{
            if(url==="" || caption==="" || name===""){
                throw 'error';
            }
            
            if(!url.includes("jpg") && !url.includes("jpeg") && !url.includes("png")){
                throw 'error';
            }
            
            await axios.post(server1, {
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
            }, 3000)
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

        <Button className="btn btn-primary" onClick={handleClick} style={{marginBottom:"27px"}}>Submit</Button>
        </Col>
      </Row>
</Container>

);
}

export default MemeForm;
