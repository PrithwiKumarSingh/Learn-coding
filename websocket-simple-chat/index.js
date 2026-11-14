import http from "node:http"
import fs from 'node:fs/promises'
import path from "path"
import {WebSocketServer} from "ws"
import { redisPublish, redisSubscribe } from "./connection.js"

const PORT = process.env.PORT | 9000
const REDIS_CHANNEL = 'ws-server'

const httpServer = http.createServer(async (req,res)=>{
    const indexFile = await fs.readFile(path.resolve("./index.html"));
    res.setHeader("Content-Type", "text-html");
    return res.end(indexFile)
})

const wsServer = new WebSocketServer({server: httpServer});

redisSubscribe.subscribe(REDIS_CHANNEL);
redisSubscribe.on('message', (channel, message)=>{
    if(channel == REDIS_CHANNEL){
        wsServer.clients.forEach(client=>{
            client.send(message.toString()); 
        })
    }
})

wsServer.on('connection', (websocket)=>{
    console.log(`Websocket connection.......`)
    websocket.on('message', async(data)=>{

        // Relay the message to the broker.....
        console.log(`Relay the message to the broker`)
        await redisPublish.publish(REDIS_CHANNEL, data.toString())
    
    })
})

httpServer.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})
