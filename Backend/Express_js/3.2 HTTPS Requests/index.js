import express from "express"
const app= express();
const port =3000;

//request ans response 
app.get("/",(req,res) => {
    res.send("<h1>Hello World from Express JS!</h1>");
});

app.get("/about",(req,res) => {
    res.send("<h1>About me</h1><p>Hello, my name is Nishkarsh</p>");
});

app.get("/contact",(req,res) => {
    res.send("<h1>Contact Me</h1><p>email: nishkarshsharma2004@gmail.com</p>");
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});