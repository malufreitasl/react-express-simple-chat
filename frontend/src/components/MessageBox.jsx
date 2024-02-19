import { FaCircleArrowUp } from "react-icons/fa6";

export function MessageBox() {
    return (
        <div className="py-5 bg-white shadow">
            <div className="flex justify-center gap-4">
                <input type="text" className="rounded-full shadow bg-white-light h-12 px-4 w-3/4 text-gray-900"/>
                <button ><FaCircleArrowUp className="h-10 w-10 text-blue-secondary"/></button>
            </div>
        </div>
    )
}