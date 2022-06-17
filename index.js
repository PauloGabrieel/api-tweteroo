import express from "express";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up",(request,response)=>{
    users.push(request.body);
    response.send("Ok")
    
});

app.listen(5000);