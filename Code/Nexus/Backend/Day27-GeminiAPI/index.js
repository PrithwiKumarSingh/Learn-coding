import express from 'express';
import {main} from './apiChatting.js';


const app = express();
app.use(express.json());




app.post('/chat', async (req, res) => {
  try {
    const {msg} = req.body;


    const answare = await main(msg);
    res.status(200).send(answare);
  }catch(err){
    res.status(500).send("Error : "+err.message);
  }
})


app.listen(3000, () => {
  console.log("Server Started On Port  3000");
})
