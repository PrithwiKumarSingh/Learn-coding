import express from "express";
import path from "path";
// creating instance of express 
const app = express();
// Parse the Json to js Object 
app.use(express.json());
let database = [];
app.get("/file", (req, res) => {
    const fileData = path.join("/home/prithwi-kushwaha/Desktop", 'main.js');
    res.sendFile(fileData);
});
app.get("/", (req, res) => {
    res.redirect("/data");
});
app.get("/data", (req, res) => {
    res.status(200).json({
        data: database
    });
});
app.get("/user/:name", (req, res) => {
    const { name } = req.params;
    res.status(200).json({
        message: `Hello, ${name}`
    });
});
app.post("/add-content", (req, res) => {
    const data = req.body;
    if (!data) {
        res.status(400).json({
            message: "Data is Missing"
        });
    }
    database.push(data);
    res.status(200).json({
        message: "Data successfully saved "
    });
});
app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
//# sourceMappingURL=index.js.map