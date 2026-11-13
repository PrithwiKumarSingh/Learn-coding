import {Redis} from "ioredis"


export const redisPublish = new Redis({
    host : "localhost", 
    port : 6379
})

export const redisSubscribe = new Redis({
    host : "localhost", 
    port : 6379
})

