const express = require('express');

const { loadMessages, sendMessage } = require('../services/messages');

const messagesRouter = express.Router()

messagesRouter.get('/:user', (req, res) => {
    const { user } = req.params;
    const messages = loadMessages(user);
    res.status(200).json({ messages });
})

messagesRouter.post('/send/:from/:to', (req, res) => {
    const { from, to } = req.params;
    const { content } = req.body;
    const result = sendMessage(from, to, content);
    res.status(200).json({message: "message sent"});
})

module.exports = { messagesRouter }
  