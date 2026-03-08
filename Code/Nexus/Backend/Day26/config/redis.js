const redis = require("redis");

const redisClient = redis.createClient({
  username: 'default',
  password: 'eRtAajdWJC7Y29bjgCZNhaRiD2Mfmp4s',
  socket: {
    host: 'redis-17400.crce179.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 17400
  }
});


module.exports = redisClient;
