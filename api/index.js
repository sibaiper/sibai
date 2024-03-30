import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from 'path';

const app = express();

app.use(express.static("../public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../views'));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    homeLink: "/",
    contactLink: "/contact",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    homeLink: "/",
    contactLink: "/contact",
  });
});

module.exports = app;