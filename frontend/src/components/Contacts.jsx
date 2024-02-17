export function Contacts({ user, userChats, setChatInfo }) {
    const allContacts = [];
    
    userChats.forEach((e) => {
        if(e["from"] === user && !(allContacts.includes(e["to"]))) {
            allContacts.push(e["to"])
        } else if(e["to"] === user && !(allContacts.includes(e["from"]))) {
            allContacts.push(e["from"])
        } 
    })

    return (
        <>
            {allContacts.map((e, i) => (
                <div key={i} onClick={() => setChatInfo(userChats.filter(chat => chat["from"] === e || chat["to"] === e)) } className="rounded-md border text-zinc-950 shadow cursor-pointer">
                    <div className="p-1 px-2">
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-md text-white">{e}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}