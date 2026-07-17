import { Client } from "pg";
import express from "express"; 

const app = express();
app.use(express.json());
   

// const pgClient = new Client({
//     user : "neondb_owner",
//     database:"neondb",
//     port: 5432,
//     host: "ep-red-lake-ato770mh-pooler.c-9.us-east-1.aws.neon.tech",
//     password: "npg_Dc5eRj7NraUX",
//     ssl: true
// })

const pgClient = new Client(
  "postgresql://neondb_owner:npg_IP3x7LREpbWA@ep-lucky-cake-aorxhkg9-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
)
pgClient.connect();


app.post("/signin", async (req,res)=>{
  const username = req.body.username;
  const password  = req.body.password; 
  const email = req.body.email;
  
  try{
    const InsertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`
    console.log(InsertQuery);
    const response = await pgClient.query(InsertQuery, [username, password, email])
    console.log(response);
    res.json({
      message : "You have Signed up"
    })

  }catch(err){  
    console.log(err)
    res.json({
      Error : err
    })
  }
})


  app.listen(3000,()=>{
    console.log("Server started on http://localhost:3000")
  })