import http from "node:http"
import fs from 'node:fs/promises'
import path from "path"
import {WebSocketServer} from "ws"

const PORT = process.env.PORT | 9000

const httpServer = http.createServer(async (req,res)=>{
    const indexFile = await fs.readFile(path.resolve("./index.html"));
    res.setHeader("Content-Type", "text-html");
    return res.end(indexFile)
})

const wsServer = new WebSocketServer({server: httpServer});

wsServer.on('connection', (websocket)=>{
    console.log(`Websocket connection.......`)


    websocket.on('message', (data)=>{

        console.log(`Received msg : ${data.toString()}`)

        wsServer.clients.forEach(client => {
            client.send(data.toString());
        })
    })
})



httpServer.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})
