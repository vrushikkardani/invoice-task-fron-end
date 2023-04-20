
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 1200;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);



app.get("/", (req, res) => {
    res.render("login_page");
});
app.get("/home", (req, res) => {
    res.render("home");
});
app.get("/user", (req, res) => {
    res.render("user");
});
app.get("/invoice", (req, res) => {
    res.render("invoice");
});
app.get("/customer", (req, res) => {
    res.render("customer");
});
app.get("/company", (req, res) => {
    res.render("company");
});
app.get("/createInvoice", (req, res) => {
    res.render("createInvoice");
});
 



app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})





