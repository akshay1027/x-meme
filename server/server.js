// backend URL= https://akshayrr-xmeme.herokuapp.com/

const express = require("express");
const low = require("lowdb");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const FileSync = require("lowdb/adapters/FileSync");
const dotenv = require("dotenv");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

dotenv.config();


//-----------------------------------------------------------------------------


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


//-----------------------------------------------------------------------------


const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(logger("dev"));


//-----------------------------------------------------------------------------


const swaggerApp = express();

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Xmeme API AkshayRR",
        version: '15.0.0',
        description: "MemeStream API's documentation",
      },
      servers: [
        {
          url: "http://localhost:8081",
        },
      ],
    },
    apis: ["server.js"],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); 
swaggerApp.use("/swagger-ui", swaggerUI.serve, swaggerUI.setup(swaggerDocs));


//-----------------------------------------------------------------------------


//express

app.get("/", function (req, res) {
  res.send("hello from server");
});


//-----------------------------------------------------------------------------


// Automated Swagger


// POST Route to server
/**
 * @swagger
 * /memes:
 *   post:
 *     summary: Create a new meme
 *     tags: [Memes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: successfully created meme
 *     
 *       500:
 *         description: internal server error
 */


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


//-----------------------------------------------------------------------------


// memes by id to server

// GET Route by id
/**
 * @swagger
 * /memes/{id}:
 *   get:
 *     summary: Get the meme by id
 *     tags: [Memes]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The meme id
 *     responses:
 *       201:
 *         description: The meme with the entered id
 *         
 *       404:
 *         description: The meme was not found
 */


app.get("/memes/:id", function (req, res) {
  let id1 = Number(req.params.id);
  console.log(id1);
  let uniqueData = db.get("memes").find({ id: id1 }).value();
  console.log(uniqueData);
  res.status(201);
  res.send(uniqueData);
});


//-----------------------------------------------------------------------------


// getting latest 100 memes

// GET Route to server
/**
 * @swagger
 * /memes:
 *   get:
 *     summary: Returns the list of latest 100 memes from db
 *     tags: [Memes]
 *     responses:
 *       201:
 *         description: The list of the memes from db
 *       
 */


app.get("/memes", function (req, res) {
  let data = db.get("memes").value();
  let cloneData = [...data].reverse().slice(0, 100);
  res.status(201);
  res.send(cloneData);
});


//-----------------------------------------------------------------------------


const port = process.env.PORT || 8081;

app.listen(port, function () {
  console.log(`listening on ${port}`);
});


//-----------------------------------------------------------------------------


//swagger

swaggerApp.listen(8080, () => console.log(`Swagger is running at 8080`));