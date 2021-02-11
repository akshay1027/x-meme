const express = require("express");
const low = require("lowdb");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const FileSync = require("lowdb/adapters/FileSync");

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

// express
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));

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

app.get("/memes", function (req, res) {
  const data = db.get("memes").value();
  res.send(data);
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
