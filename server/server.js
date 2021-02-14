// backend URL= https://akshayrr-xmeme.herokuapp.com/

const express = require("express");
const low = require("lowdb");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const FileSync = require("lowdb/adapters/FileSync");
const dotenv = require("dotenv");

dotenv.config();

// low db
const adapter = new FileSync("db.json");
const db = low(adapter);

const defaultData = {
  memes: [
    {
      id: 0,
      caption: "wow",
      name: "akshay",
      url:
        "https://static.mommypoppins.com/styles/image620x420/s3/school_meme_3_0.jpg",
    },
  ],
};

db.defaults(defaultData).write();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(logger("dev"));

//express

app.get("/", function (req, res) {
  res.send("hello from server");
});

app.post("/memes", (req, res) => {
  const name = req.body.name;
  const caption = req.body.caption;
  const url = req.body.url;

  const lastMeme = db.get("memes").takeRight(1).value()[0];
  console.log(lastMeme);
  const nextId = lastMeme.id + 1;
  db.get("memes")
    .push({
      id: nextId,
      name: name,
      caption: caption,
      url: url,
    })
    .write();
  res.status(201);
  res.json({ id: nextId });
});

// memes by id

app.get("/memes/:id", function (req, res) {
    let id1 = req.params.id;
    let uniqueData = db.get("memes").find({ id: id1 }).value();
    res.send(uniqueData);
});

// getting latest 100 memes

app.get("/memes", function (req, res) {
  let data = db.get("memes").value();
  let cloneData = [...data].reverse().slice(0, 100);
  res.send(cloneData);
});

const port = process.env.PORT || 8081;

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
