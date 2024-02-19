import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ChatPage } from "./ChatPage";

export function LoginPage() {
    const [user, setUser] = useState("");
    const [userChats, setUserChats] = useState([]);
    
    const handleOnClick = async () => {
        try {
            const response = await fetch(`api/messages/${user}`);
            console.log(response)
            const body =  await response.json();
            setUserChats(body);
        } catch(err) {
            console.log(err)
        }
    }

    
    return (
        <>
            {userChats.length >= 1? (
                <ChatPage user={user} userChats={userChats}/>
            ) : (
                <div className="h-screen flex flex-col justify-center gap-16">
                    <h1 className="text-6xl text-gray-primary">Chat App</h1>
                    <div className="flex items-center justify-center">
                        <div className="flex gap-4">
                            <input type="text" id="user" name="user" placeholder="Name" className="border-2 border-slate-300 rounded-md text-4xl text-gray-primary p-2" onChange={(e) => setUser(e.target.value)} />
                            <button>
                                <IoIosArrowDroprightCircle onClick={ handleOnClick } className="w-16 h-16 text-blue-secondary"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}