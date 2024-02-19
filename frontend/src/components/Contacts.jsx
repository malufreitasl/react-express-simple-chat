import { useState } from "react";

export function Contacts({ user, userChats, setChatInfo }) {
    const [ activeButton, setActiveButton ] = useState();
    const allContacts = [];
    
    userChats.forEach((e) => {
        if(e["from"] === user && !(allContacts.includes(e["to"]))) {
            allContacts.push(e["to"]);
        } else if(e["to"] === user && !(allContacts.includes(e["from"]))) {
            allContacts.push(e["from"]);
        } 
    })

    return (
        <>
            {allContacts.map((e, i) => (
                <div 
                key={i} 
                className={
                    `rounded-lg border text-zinc-950 shadow cursor-pointer 
                    ${activeButton===i? "bg-gray-200 border-gray-300": "bg-white-light"}`}
                onClick={() => {
                    setActiveButton(i)
                    setChatInfo(userChats.filter(chat => chat["from"] === e || chat["to"] === e))
                }}>
                    <div className="flex justify-start gap-2 py-5 px-4">
                        <div>
                            foto
                        </div>
                        <div className="flex self-start gap-2">
                            <p className="font-semibold text-md">{e}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}