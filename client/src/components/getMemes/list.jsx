import { useEffect, useState } from "react";
import axios from "../../helper/axiosHelper";
import Card from "../mainpage/card";

function GetMemes() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const server1 =
      process.env.NODE_ENV === "production"
        ? "https://akshayrr-xmeme.herokuapp.com/"
        : "http://localhost:8081/memes";
    const init = async () => {
      // get http request using axios
      let res = await axios.get(server1);
      res = await res.data;
      setMemes(res);
    };
    console.log("get request");
    init();
  }, []);
  return (
    <div>
      <div>
        {memes
          .map((meme) => (
            <Card
              Name={meme.name}
              caption={meme.caption}
              url={meme.url}
              id={meme.id}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default GetMemes;