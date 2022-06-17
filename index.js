import express, { response } from "express";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up",(request,response)=>{
    users.push(request.body);
    response.send("Ok");
    
});

app.post("/tweets",(request, response)=>{
    tweets.push(request.body);
    response.send("Ok");
    console.log(tweets);
});


app.listen(5000);