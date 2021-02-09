import {Form, Button, Toast} from "react-bootstrap"
import React from "react";
import {useState} from 'react';
import axios from "../../helper/axiosHelper";

import { Container, Row, Col } from "react-bootstrap";
import "../memeForm/memeForm.css"

const MemeForm = () => {
    
    // handling state
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [err, setErr] = useState("");
    
    // function to send data
    const handleClick = async() =>{
        
        try{
            if(url==="" || caption==="" || name===""){
                throw 'err';
            }
            await axios.post('memes', {
                    name, url, caption
            });
            window.location.reload();
        }
        catch(e) {
            if(e==='err'){
                setErr("Please provide proper input");
            }
            setTimeout(()=>{
                setErr("")
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
        <h1>Xmeme</h1>
        <br />
        
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Name</Form.Label>
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
            <Form.Label className="form-label">Caption</Form.Label>
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
            <Form.Label className="form-label">URL</Form.Label>
            <br />
            <Form.Control type="search" placeholder="Enter URL" size="lg" 
             onChange={(e)=>setUrl(e.target.value)} 
             value={url}
            />
            <br />
        </Form.Group>
        </Form>

        <Button className="btn btn-primary" onClick={handleClick}>Submit</Button>
        <Toast show={err!==""} onClose={()=>setErr("")} style={{position: "absolute", height: "40px", top:"40px", right:"0", backgroundColor:'rgba(255,0, 0, 0.5)', zIndex:1000}}>
                <Toast.Body>{err}</Toast.Body>
        </Toast>
        </Col>
      </Row>
</Container>

);
}

export default MemeForm;


   /* <Form className="form-inline my-2 my-lg-0" style={{position: "absolute", right:"5px", backgroundColor:"white", padding:"5px"}}>
        <FormControl className="form-control mr-sm-2" type="search" placeholder="Name" aria-label="Search" onChange={(e)=>setName(e.target.value)} value={name} />
        <FormControl className="form-control mr-sm-2" type="search" placeholder="URL" aria-label="URL" onChange={(e)=>setUrl(e.target.value)} value={url} />
        <FormControl className="form-control mr-sm-2" type="search" placeholder="Caption" aria-label="Caption" onChange={(e)=>setCaption(e.target.value)} value={caption} />
        <Button className="btn btn-primary" onClick={handleSubmit} style={{margin: "5px"}}>Submit</Button>
    </Form>

    */