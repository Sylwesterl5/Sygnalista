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
const queryUpdateStatus = require("./src/queryUpdateStatus");
const queryUpdateWiadomosc = require("./src/queryUpdateWiadomosc");

ConnectList().then();

const initialize = async () => {
  const connection = await ConnectList();
  app.post("/api/zgloszenias", async (req, res) => {
    const { code } = req.body;
    const { status } = req.query;
    const result = await queryZgloszenias(connection, code, status);
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
    const result = await queryZgloszeniesWiadomosci(
      connection,
      req.params.idZgloszenia
    );
    res.send(result);
  });

  app.put("/api/zgloszenieStatus", async (req, res) => {
    const { status, idZgloszenia } = req.body;

    const result = await queryUpdateStatus(connection, idZgloszenia, status);
    res.send(result);
  });

  app.put("/api/zgloszenieStatus/zgloszenieUpdate", async (req, res) => {
    const { status, idZgloszenia } = req.body;

    const result = await queryUpdateWiadomosci(
      connection,
      updatedWiadomsoc,
      id_wiadomosci
    );
    res.send(result);
  });

  app.post("/api/zgloszenie/:idZgloszenia", async (req, res) => {
    const { description } = req.body;
    const result = await queryNewZgloszeniesWiadomosc(connection, {
      idZgloszenia: req.params.idZgloszenia,
      description,
    });
    res.send(result);
  });

  app.put("/api/zgloszenieUpdateWiadomosc", async (req, res) => {
    const { updatedWiadomsoc, id_wiadomosci } = req.body;

    const result = await queryUpdateWiadomosc(
      connection,
      updatedWiadomsoc,
      id_wiadomosci
    );
    res.send(result);
  });
};
initialize();

app.listen(3000, () => {
  console.log("zwrot callbacka: server działa ");
});

app.get("/", (req, res) => {
  res.send([{ dziala: "dziala" }]);
});

module.exports = app;
