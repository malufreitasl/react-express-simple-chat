const express = require('express')
const app = express()
const port = 5001

const chatHistory = require("../chat-data/chat-history.json")

app.get('/api/messages/:user', (req, res) => {
    const { user } = req.params
    const userChats = chatHistory.filter(e => e["from"] === user || e["to"] === user)
    res.send(userChats)
})

app.get('/api/messages/:from/:to', (req, res) => {
    const { from, to } = req.params
    const filteredMessages = chatHistory.filter(e => (e["from"] === from && e["to"] === to) || (e["from"] === to && e["to"] === from))
    res.send(filteredMessages)
})
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})