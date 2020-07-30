const express = require("express");
const app = express();
const cors = require("cors");
var admin = require("firebase-admin");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://letme-3320d.firebaseio.com",
});
const db = admin.firestore();
app.use(cors());
app.use(jsonParser);

app.get("/res", (req, res) =>
  res.json({
    name: "Tess be to fe",
  })
);

app.listen(3005, () => console.log("Example"));
