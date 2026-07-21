import { client } from "./lib/prisma.js";
import express from "express";
const app = express();
app.use(express.json());
app.get("/user", async (req, res) => {
    try {
        const data = await client.user.findMany();
        res.json({
            data
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await client.user.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                todos: true,
                username: true,
                password: true
            }
        });
        res.json({
            data
        });
    }
    catch (err) {
        res.json({
            messsage: err
        });
    }
});
async function main() {
    try {
        const res = await client.user.findFirst({
            where: { id: 1 },
            // @ts-ignore 
            include: {
                todos: true
            }
        });
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
app.listen(3000);
// .then(async()=>{
//     await client.$disconnect();
// })  
//# sourceMappingURL=index.js.map