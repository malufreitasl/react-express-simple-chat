import { useState } from "react";
import { Contacts } from "../components/Contacts";
import { Chat } from "../components/Chat";
import { MessageBox } from "../components/MessageBox";

export function ChatPage({ user, userChats }) {
    const [ chatInfo, setChatInfo ] = useState([]) 

    return (
        <>
            <div className="flex h-screen justify-between min-h-screen min-w-screen">
                <div className="w-1/4 h-full border-r flex flex-col gap-2 p-2">
                    <div className="text-xl p-2">Welcome {user}</div>
                    <Contacts user={user} userChats={userChats} setChatInfo={setChatInfo} />
                </div>
                <div className="w-3/4 h-full fixed right-0 flex flex-col justify-between  bg-white-light">
                    <Chat user={user} chatInfo={chatInfo} />
                    <MessageBox />
                </div>
            </div>
        </>
    )
}