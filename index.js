import express, { request, response } from "express";
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
    tweets.map(item =>{
    
        users.filter(user =>{
            if(user.username === item.username){
                item.avatar = user.avatar;
            };
        })
    })
});



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