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
    { id: 10, name: "Computer Networks", author: "Andrew S. Tanenbaum" }
];


app.get("/book", (req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const Book = BookStore.find(data=>data.id === id);
    res.send(`Book is ${Book.name}. Written By :- ${Book.author}`);
});

app.post("/book", (req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Added Sucessfully");
})

app.delete("/book",(req,res)=>{
    BookStore.pop()
    res.send("Data Deleted");
})

app.listen(3000, (req,res)=>{
    console.log("Server Started on Port number 3000");
})