import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from "path"; // Import the path module

const app = express();
const port = process.env.PORT || 2300;

// Set the views directory explicitly
app.set("views", path.join(__dirname, "views"));

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
