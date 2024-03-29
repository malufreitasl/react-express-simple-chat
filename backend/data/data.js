const messages = [
    {
        "from": "Andrezza",
        "to": "Rafael",
        "content": "Hello Rafael! How are you",
        "msDate": 1737254100000
    },
    {
        "from": "Rafael",
        "to": "Andrezza",
        "content": "Hi Andrezza! I'm doing well, thank you. How about you?",
        "msDate": 1737254160000
    },
    {
        "from": "Andrezza",
        "to": "Rafael",
        "content": "I'm doing good too. Just working on some projects. How's your day going?",
        "msDate": 1737254220000
    },
    {
        "from": "Rafael",
        "to": "Andrezza",
        "content": "That's great to hear! My day is going well too. What projects are you working on?",
        "msDate": 1737254280000
    },
    {
        "from": "Andrezza",
        "to": "Rafael",
        "content": "I'm currently working on a chat application using React and Express. How about you?",
        "msDate": 1737254340000
    },
    {
        "from": "Rafael",
        "to": "Andrezza",
        "content": "I am about to give a class just about that!",
        "msDate": 1737254480000
    },
    {
        "from": "Andrezza",
        "to": "Rafael",
        "content": "Great! I will leave you to it. Bye!",
        "msDate": 1737254580000
    },
    {
        "from": "Rafael",
        "to": "Andrezza",
        "content": "Bye!",
        "msDate": 1737254670000
    },
    {
        "from": "Rafael",
        "to": "Claudio",
        "content": "Hey Claudio! How's it going?",
        "msDate": 1737254700000
    },
    {
        "from": "Claudio",
        "to": "Rafael",
        "content": "Hey Rafael! I'm doing great, thanks for asking. How about you?",
        "msDate": 1737254760000
    },
    {
        "from": "Rafael",
        "to": "Claudio",
        "content": "I'm doing pretty well too, just busy with work",
        "msDate": 1737254820000
    }
]

function getData() {
    return messages;
}

module.exports = { getData }