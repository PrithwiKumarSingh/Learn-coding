const express = require("express");
const app = express();
app.use(express.json());
const {auth} = require("./middleware/auth");

const foodItem = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Chicken Curry", category: "non-veg", price: 1000 },
  { id: 3, food: "Paneer Butter Masala", category: "veg", price: 900 },
  { id: 4, food: "Mutton Rogan Josh", category: "non-veg", price: 1400 },
  { id: 5, food: "Veg Biryani", category: "veg", price: 800 },
  { id: 6, food: "Chicken Biryani", category: "non-veg", price: 1200 },
  { id: 7, food: "Masala Dosa", category: "veg", price: 300 },
  { id: 8, food: "Fish Fry", category: "non-veg", price: 1100 },
  { id: 9, food: "Veg Momos", category: "veg", price: 400 },
  { id: 10, food: "Egg Roll", category: "non-veg", price: 250 },
];

const CartItem = []; // cart items
app.post("/user/:id", (req,res)=>{
  try{
  const item = foodItem.find(item => item.id === parseInt(req.params.id));
  if(item){
    CartItem.push(item);
    res.status(200).send("Add to cart Successfully");
  }
  else{
    res.send("Item is Out of Stock !");
  }}
  catch(err){
    res.send("Error : "+ err);
  }
})

app.delete("/user/:id",(req,res)=>{
  try{``
  const foodItem = CartItem.findIndex(item=> item.id === parseInt(req.params.id));
  if(foodItem!=-1){
  CartItem.splice(foodItem,1);
    res.status(200).send("Food Item deleted Successfully");
  }
  else{
    res.send("Food Item not Found");
  }}
  catch(err){
    res.send("Error : "+err);
  }
})
app.get("/user", (req,res)=>{
  try{
    if(CartItem.length == 0){
      res.status(200).send("Cart is Empty");
    }else{
      res.status(200).send(CartItem);
    }
  }catch(err){
    res.send("Error : "+ err);
  }
})

app.use("/admin", auth);

app.get("/admin", (req,res)=>{
  res.status(200).send(foodItem);
})


app.post("/admin", (req,res)=>{
  const item = req.body;
  foodItem.push(item);
  res.status(200).send("Food Item Added Successfully")
})

app.delete("/admin/:id", (req, res)=>{
  const index = foodItem.findIndex(item => item.id === parseInt(req.params.id));
  foodItem.splice(index,1);
  res.status(200).send("Food Item Deleted Successfully");
})

app.patch("/admin", (req,res)=>{
  try{
  const foodItm = foodItem.find(item => item.id === req.body.id);
  console.log(foodItm);

  if(req.body.food)
    foodItm.food = req.body.food;
  if(req.body.category)
    foodItm.category = req.body.category;
  if(req.body.price)
    foodItm.price = req.body.price;

  res.status(200).send("Data Update Successfully");
  }catch(err){
    res.send("Error : " + err);
  }
})


app.listen(3000, (req,res)=>{
  console.log("Server Started on Port 3000");
})
