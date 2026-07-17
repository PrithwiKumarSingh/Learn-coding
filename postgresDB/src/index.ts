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

  const city = req.body.city; 
  const country = req.body.country;
  const state = req.body.country;
  const pincode = req.body.pincode;

    const addressInsertQuery = `INSERT INTO address(city, country, state, pincode, userId) VALUES ($1, $2, $3, $4, $5)`
    const InsertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id;`


  
  try{

    await pgClient.query("BEGIN;");
    const response = await pgClient.query(InsertQuery, [username, password, email])
    const userId = response.rows[0].id;
    console.log("user added");
    await new Promise(x=>setTimeout(x,10*1000))
    console.log("address Added")
    const responseAddressQuery = await pgClient.query(addressInsertQuery,[city, country, state, pincode, userId]);
    await pgClient.query("COMMIT;");

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


// Bad way to get metadata about user
app.get("/metadata", async(req,res)=>{
    const id = req.query.id;
    console.log("HELLO : " ,id);
    const query1 = `SELECT username,email FROM users WHERE id=$1`
    const query2 = `SELECT city,state,country,pincode, createdat FROM address WHERE userId=$1`
    try{
      
      const response = await pgClient.query(query1,[id]);
      const response2 = await pgClient.query(query2,[id]);

      res.json({
        user : response.rows[0],
        address : response2.rows[0]
      })
    }catch(err){
      console.log(err);
      res.json({
        Error: err
      })
    }
})


// Better way to get metadata about user using join 
app.get("/better-metadata",async (req,res)=>{
  const id = req.query.id;
  const joinQuery = `SELECT users.id, users.username, users.email, address.userId, address.city, address.country,
                      address.state, address.pincode FROM users JOIN address ON users.id = address.userId 
                        WHERE users.id=$1;`
  try{
    const response = await pgClient.query(joinQuery,[id]);
    res.json({
      response : response.rows[0],
      length : response.rows.length
    })
  }catch(e){
    console.log(e);
    res.json({
      Error : e
    })
  }
})

  app.listen(3000,()=>{
    console.log("Server started on http://localhost:3000")
  })