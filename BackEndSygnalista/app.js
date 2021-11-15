var express = require("express"); // załączamy paczke express do projektu

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const app = express(); // aby wywołać express czyli stworzenie serwera przypisujemy ją do zmiennej app
// const bodyParser = require("body-parser");
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../FrontEndSygnalista/build")));

const port = 3000; // nadawanie na port 3000
//app.set('port', port);
const ConnectList = require("./src/ConnectList");
const queryZgloszenias = require("./src/queryZgloszenias");
const queryNewZgloszenie = require("./src/queryNewZgloszenie");
const queryZgloszeniesWiadomosci = require("./src/queryZgloszeniesWiadomosci");
const queryNewZgloszeniesWiadomosc = require("./src/queryNewZgloszeniesWiadomosc");

ConnectList().then();

const initialize = async () => {
  const connection = await ConnectList();
  app.post("/api/zgloszenias", async (req, res) => {
    // console.log(req);
    console.log(req.body);
    const { code } = req.body;
    const result = await queryZgloszenias(connection, code);
    res.send(result);
  });
  app.post("/api/zgloszenias/new", async (req, res) => {
    const { title, description, status } = req.body;
    const result = await queryNewZgloszenie(connection, {
      title,
      description,
      status,
    });
    res.send(result);
  });
  app.get("/api/zgloszenie/:idZgloszenia", async (req, res) => {
    // console.log(req);
    console.log(req.params);

    const result = await queryZgloszeniesWiadomosci(
      connection,
      req.params.idZgloszenia
    );
    res.send(result);
  });
  app.post("/api/zgloszenie/:idZgloszenia", async (req, res) => {
    // console.log(req);

    ///req.params.idZgloszenia
    console.log(req.body);
    const { description } = req.body;
    const result = await queryNewZgloszeniesWiadomosc(connection, {
      idZgloszenia: req.params.idZgloszenia,
      description,
    });
    res.send(result);
  });
};
initialize();

app.listen(3000, () => {
  console.log("zwrot callbacka: server działa ");
}); //uruchomienie serwera tradycyjnie

app.get("/", (req, res) => {
  res.send([{ dupa: "asdasd" }]);
});

module.exports = app;
