import express from 'express';

const app=express();
const port=3000;


app.get("/", (req,res)=>{
    const today = new Date();
    // const today = new Date("June 1, 2024 12:00:00");
    const day = today.getDay();

    // console.log(day);
    let type = "weekday";
    let adv = "It's time to work hard!";

    if(day===0 || day===6){
        type = "the weekend";
        adv = "It's time to have some fun!";
    }

    res.render("index.ejs",{
        dayType: type, 
        advice: adv,
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});