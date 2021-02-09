import {useEffect, useState} from "react";
import axios from "../../helper/axiosHelper";
import Card from "../mainpage/mainpage";

function GetMemes() {
    const [memes, setMemes] = useState([]);
    useEffect(()=>{
        const init = async() => {
            // get http request using axios
            let res = await axios.get('/memes');
            res = await res.data;
            setMemes(res);
        }
        console.log("get request");
        init();
    },[])
    return (
        <div>
                <div className="d-flex flex-row flex-wrap justify-content-sm-around">
                    {memes.map((meme) => (
                        <Card Name={meme.name} caption={meme.caption} url={meme.url} id={meme.id}/>
                    ))}
                </div>
        </div>
    )
}

export default GetMemes;