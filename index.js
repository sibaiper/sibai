import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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