import express, { request, response } from "express";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up",(request,response)=>{
    const {username, avatar} = request.body;
    if(!username || !avatar){
        response.status(400).send("Todos os campos são obrigatórios");
        return;
    }
    users.push({
        username,
        avatar
    });
    response.status(201).send(users);
});

app.post("/tweets",(request, response)=>{

    const {username,tweet} = request.body;

    if(!username || !tweet){
        response.status(400).send("Todos os campos são obrigatórios");
        return;
    }
    tweets.unshift({
        username,
        tweet
    });
    response.status(201).send(tweets);
    
    tweets.map(item =>{
    
        users.filter(user =>{
            if(user.username === item.username){
                item.avatar = user.avatar;
            };
        })
    })
});

app.get("/tweets/:username",(request,response)=>{
    const {username} = request.params;
    const userTweets = tweets.filter(tweet => tweet.username === username);
    response.send(userTweets);  
})

app.get("/tweets",(request, response)=>{
    const lastTenTweets =[];
    const numberOfTweets = tweets.length;
    const lastTweetIndex = tweets.length-1;
    const renderTweetsperpage = 10;
    
    if(numberOfTweets <= renderTweetsperpage){
        for (let i = lastTweetIndex; i >= 0 ; i --){
            lastTenTweets.push(tweets[i]);
        };
    }else{
        const indexOfTheTenthTweet = numberOfTweets - renderTweetsperpage
        for (let i = lastTweetIndex ; i >= indexOfTheTenthTweet; i -- ){
            lastTenTweets.push(tweets[i]);
        };
    };       
    
    response.send(lastTenTweets);
});


app.listen(5000);