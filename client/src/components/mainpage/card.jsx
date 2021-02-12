import { useState } from 'react';
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
                    <div>
                        <h6>{props.Name}</h6>
                        <h5><strong>{props.caption}</strong></h5>
                    </div>
            </div>
            <img src={props.url} alt={props.caption} className="card-img-top" />
        </div>
      </Row>
    </Container>
    )
}

export default MainPage;

  /*  const [url, setUrl] = useState("");
    const [hide, setHidden] = useState(true);
    const [caption, setCaption] = useState("");
    const [caption2, setCaption2] = useState("");
    const [err, setErr] = useState("");
    const [url2, setUrl2] = useState("");
    useEffect(()=>{
        setUrl2(props.url);
        setCaption2(props.caption);
    },[])
    const handleError = () => {
        setUrl2("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg")
    }
    const handleEdit = () => {
        setUrl("");
        setCaption("");
        setHidden(!hide);
    }
    const handleSubmit = async () => {
        try{
            if(url==="" || caption===""){
                throw new Error("err");
            }
            if(!url.includes("jpg") && !url.includes("jpeg") && !url.includes("png")){
                throw 'err';
            }
            await axios.patch('memes/'+props.id, {
                    url,
                    caption
            });
            setUrl2(url);
            setCaption2(caption);
            setHidden(true);
        }
        catch {
            setErr("Please provide proper input");
            setTimeout(()=>{
                setErr("")
            }, 2000)
            return;
        }        
    }
    return (
        <div className="card border border-secondary rounded p-3 mx-100" style={{width: "25rem", marginBottom:"5px"}}>
            <div className="card-body">
                <div className="d-flex flex-row justify-content-sm-between">
                    <p><input value={caption} placeholder={hide?caption2:"Caption"} disabled={hide} onChange={(e)=>setCaption(e.target.value)} style={{maxWidth:"76%", borderWidth: hide?0:1}} /></p>
                    <span hidden={hide}><input value={url} placeholder="URL" disabled={hide} onChange={(e)=>setUrl(e.target.value)} style={{maxWidth: "66%", borderWidth:hide?0:1}}/></span>
                </div>
                <div className="d-flex flex-row justify-content-sm-between">
                    <div>
                        <strong>{props.Name}</strong>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button onClick={handleSubmit} disabled={hide}>Submit</button>
                        <button onClick={handleEdit}>{hide?"Edit":"Cancel"}</button>
                    </div>
                </div>
            </div>
            <img src={url2} onError={handleError} className="card-img-top" style={{height: "300px", maxWidth:"100%"}}/>
            <Toast show={err!==""} onClose={()=>setErr("")} style={{position: "absolute", height: "40px", bottom:"40px", right:"0", backgroundColor:'rgba(255,0, 0, 0.5)', zIndex:1000}}>
                <Toast.Body>{err}</Toast.Body>
            </Toast>
        </div>
    )
}

*/