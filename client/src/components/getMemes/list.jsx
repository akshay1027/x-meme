import {useEffect, useState} from "react";
import axios from "../../helper/axiosHelper";
import Card from "../mainpage/card";

function GetMemes() {
    const [memes, setMemes] = useState([]);
    useEffect(()=>{
        const init = async() => {
            // get http request using axios
            let res = await axios.get('http://localhost:8081/memes');
            res = await res.data;
            setMemes(res);
        }
        console.log("get request");
        init();
    },[])
    return (
        <div>
            <div>
                {memes.map((meme) => (
                    <Card Name={meme.name} caption={meme.caption} url={meme.url} id={meme.id}/>
                ))}
            </div>
        </div>
    )
}

export default GetMemes;