import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

import { fileURLToPath } from "url";
import { dirname, join } from "path"

const app = express();
const port = process.env.PORT || 2300;


// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the views directory explicitly
app.set("views", join(__dirname, "views"));


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
