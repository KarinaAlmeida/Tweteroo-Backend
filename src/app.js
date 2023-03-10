import express from 'express';
import cors from 'cors';

const server = express()

server.use(cors())
server.use(express.json())

let PORT = 5000;

let users =[
    // {
    //     username: 'bobesponja', 
    //     avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    // }
];

let tweets = [
    // {
    //   username: "bobesponja",
    //   tweet: "eu amo o hub"
    // }
];

server.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.status(201).send("OK");
});

server.post("/tweets", (req, res) => {

  let logado= users.find(e=>e.username === req.body.username)

    if (logado ===undefined ) {
        res.status(401).send("UNAUTHORIZED");  
    return
  }
        
    tweets.unshift(req.body)
    res.status(201).send("OK");
});

server.get("/tweets", (req, res) => {
    const listaTweets= [];
    let tam= tweets.length <10 ? tweets.length : 10
    for (let i=0; i <tam; i++) {
        const objetoUser= users.find(user=>user.username === tweets[i].username)
        listaTweets.push(
            {
                username: tweets[i].username,
                avatar: objetoUser.avatar,
                 tweet: tweets[i].tweet

            }
        )
    }

       
        

    res.send(listaTweets);
});



server.listen(PORT, () => {
     console.log(`Servidor rodando na porta: ${PORT}`)
})



