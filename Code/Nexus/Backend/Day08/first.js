import express from "express";
const app = express();
app.use(express.json());


const BookStore = [
    { id: 1, name: "Harry Potter", author: "Devflix" },
    { id: 2, name: "A Text Book of Mathematics", author: "Dr. K.C. Sinha" },
    { id: 3, name: "Introduction of Java", author: "James Goslin" },
    { id: 4, name: "Digit Mathematics", author: "Sagir Sagar" },
    { id: 5, name: "Learning JavaScript", author: "Mark Ethan" },
    { id: 6, name: "Python for Beginners", author: "John Miller" },
    { id: 7, name: "Data Structures", author: "Narasimha Karumanchi" },
    { id: 8, name: "Clean Code", author: "Robert C. Martin" },
    { id: 9, name: "Operating System Concepts", author: "Abraham Silberschatz" },
    { id: 10, name: "Computer Networks", author: "Andrew S. Tanenbaum" },
    { id: 11, name: "Introduction of Java Advance", author: "James Goslin" }
];

app.get("/book", (req,res)=>{
    console.log(req.query);
    const book = BookStore.filter(item=>item.author === req.query.author);
    res.send(book);
})


app.patch("/book", (req,res)=>{
   const book = BookStore.find(info=> info.id === req.body.id);

   if(req.body.author)
   book.author = req.body.author;

   if(req.body.name)
    book.name = req.body.name; 
    
    res.send("Data Change Sucessfully");
})

app.put("/book", (req,res)=>{
    const book = BookStore.find(info=>info.id === req.body.id);
    
    book.author = req.body.author;
    book.name = req.body.name;
    res.send("Data Changed Sucessfully");
})

app.delete("/book/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info => info.id === id);
    BookStore.splice(index,1);
    res.send("Data Deleted Sucessfully");
    

})





app.listen(3000, (req,res)=>{
    console.log("Server listen on Port 3000 ");
})
