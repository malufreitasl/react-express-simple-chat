import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ChatPage } from "./ChatPage";

export function LoginPage() {
    const [user, setUser] = useState("");
    const [userChats, setUserChats] = useState([]);
    
    const handleOnclick = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`/api/messages/${user}`);
            const body =  await response.json();
            setUserChats(body);
        } catch(err) {
            console.log(err)
        }
    }

    console.log(userChats)
    return (
        <>
            {userChats.length >= 1? (
                <ChatPage user={user} userChats={userChats}/>
            ) : (
                <div className="h-screen flex flex-col justify-center gap-16">
                    <h1 className="text-8xl text-gray-primary">Chat App</h1>
                    <div className="flex items-center justify-center">
                        <form className="flex gap-4">
                            <input type="text" id="user" name="user" placeholder="Name" className="border-2 border-slate-300 rounded-md text-6xl" onChange={(e) => setUser(e.target.value)} />
                            <button>
                                <IoIosArrowDroprightCircle onClick={ handleOnclick } className="w-20 h-20 text-gray-primary"/>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}