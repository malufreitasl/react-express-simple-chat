const { getData } = require("./data");

function findUserMessages(userName){
    const data = getData()
    return data.filter(e => e["from"] === userName || e["to"] === userName)
}

function insertUserMessage(insertDocument) {
    const data = getData()
    return data.push(insertDocument)
}

module.exports = { findUserMessages, insertUserMessage }