import express from "express"

const PORT = process.env.PORT | 3001

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: "Hello Docker How are you ?" })
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
