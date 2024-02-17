import { Ballon } from "./Ballon";
import { FaCircleArrowUp } from "react-icons/fa6";

export function Chat({ chatInfo, user }) {
    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full pt-10 px-10 pb-100">
                {chatInfo.length > 0? (
                    <Ballon chatInfo={chatInfo} user={user}/>
                ): (
                    <div>ola</div>
                )}
            </div>
            <div className="fixed bottom-0 w-3/4 py-4 bg-gray-700">
                <div className="flex justify-center gap-4">
                    <input type="text" className="rounded-md bg-gray-600 h-12 px-4 w-3/4 text-white"/>
                    <button><FaCircleArrowUp color="white" className="h-10 w-10"/></button>
                </div>
            </div>
        </div>
    )
}