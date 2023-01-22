const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", function (req, res) {
  res.sendStatus(200);
  if (req.body.events) {
    req.body.events.forEach(function (event) {
      if (event.type === "join" || event.type === "message") {
        console.log('Received message from: ' + JSON.stringify(event.source));
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});