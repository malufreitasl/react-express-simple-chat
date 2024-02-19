const express = require("express")

const { messagesRouter } = require("./routers/messages")

const app = express()
const PORT = 5001

app.use(express.json())

app.use("/api/messages", messagesRouter)

app.listen(PORT, () => console.log("Listening on " + PORT))