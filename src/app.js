import express from 'express';
import cors from 'cors';

const server = express()

server.use(cors())
server.use(express.json())

let PORT = 5000;

let users =[
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
];

let tweets = [
    {
      username: "bobesponja",
      tweet: "eu amo o hub"
    }
];

server.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.status(201).send("OK");
});




server.listen(PORT, () => {
     console.log(`Servidor rodando na porta: ${PORT}`)
})