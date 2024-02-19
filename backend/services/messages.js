const { findUserMessages, insertUserMessage } = require("../data/messages")

function loadMessages(userName) {
    return findUserMessages(userName);
}

function sendMessage(from, to, content) {
    const insertDocument =insertUserMessage({"from": from, "to": to, "content": content, "msDate": new Date().valueOf()});
    return insertDocument;
}

module.exports = { loadMessages, sendMessage }