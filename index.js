import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 2300;



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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
