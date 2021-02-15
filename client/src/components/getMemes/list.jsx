import { useEffect, useState } from "react";
import axios from "../../helper/axiosHelper";
import Card from "../mainpage/card";

function GetMemes() {

  //state management

  const [memes, setMemes] = useState([]);

  // get and and then store is res, used axios get request, async await and state

  useEffect(() => {
    const server1 =
      process.env.NODE_ENV === "production"
        ? "https://akshayrr-xmeme.herokuapp.com/memes"
        : "http://localhost:8081/memes";
    const init = async () => {

      // get http request using axios

      let res = await axios.get(server1);
      res = await res.data;
      setMemes(res);
    };
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
         }
      </div>
    </div>
  );
}

export default GetMemes;
