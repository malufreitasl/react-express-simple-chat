import { BiCheckDouble } from "react-icons/bi";

export function Ballon({ chatInfo, user }) {
    return (
        <div>
            {chatInfo.map((e, i) => (
                e["from"] === user? (
                    <div key={i} className="flex justify-end">
                        <div className="flex flex-col max-w-[320px] p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700 shadow">
                            <span className="text-sm self-end font-semibold text-gray-900 dark:text-white">{e["from"]}</span>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{e["content"]}</p>
                            <div className="flex items-center self-start space-x-2 rtl:space-x-reverse">
                                <BiCheckDouble className="h-4 w-4 font-normal self-end text-gray-500 dark:text-gray-400"/>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{`${new Date(e["msDate"]).getHours()}:${new Date(e["msDate"]).getMinutes()}`}</span>
                            </div>
                        </div>
                    </div>
                ): (
                    <div key={i} className="flex justify-start items-start">
                        <div className="flex flex-col max-w-[320px] p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 shadow">
                            <span className="text-sm self-start font-semibold text-gray-900 dark:text-white">{e["from"]}</span>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{e["content"]}</p>
                            <div className="flex items-center self-end space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{`${new Date(e["msDate"]).getHours()}:${new Date(e["msDate"]).getMinutes()}`}</span>
                                <BiCheckDouble className="h-4 w-4 font-normal self-end text-gray-500 dark:text-gray-400"/>
                            </div>
                            
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}