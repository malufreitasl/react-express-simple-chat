import { BiCheckDouble } from "react-icons/bi";

export function Ballon({ chatInfo, user }) {
    return (
        <div>
            {chatInfo.map((e, i) => (
                e["from"] === user? (
                    <div key={i} className="flex justify-end">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col max-w-[320px] p-4 border-gray-200 bg-blue-secondary rounded-s-xl rounded-ee-xl  shadow">
                                <span className="text-sm self-end font-semibold text-gray-900 dark:text-white">{e["from"]}</span>
                                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{e["content"]}</p>
                            </div>
                            <div className="flex items-center self-end pr-1 space-x-2 rtl:space-x-reverse">
                                <span className="pb-2 text-xs font-normal text-gray-500 dark:text-gray-400">{`${new Date(e["msDate"]).getHours()}:${new Date(e["msDate"]).getMinutes()}`}</span>
                                <BiCheckDouble className="h-4 w-4 font-normal self-start text-gray-500 dark:text-gray-400"/>
                            </div>
                        </div>
                    </div>
                ): (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="flex flex-col max-w-[320px] p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl shadow">
                            <span className="text-sm self-start font-semibold text-gray-900">{e["from"]}</span>
                            <p className="text-sm font-normal py-2.5 text-gray-900">{e["content"]}</p>
                        </div>
                        <div className="flex items-center justify-start pl-1 space-x-2 rtl:space-x-reverse">
                            <BiCheckDouble className="h-4 w-4 font-normal self-start text-gray-500 dark:text-gray-400"/>
                            <span className="pb-2 text-xs font-normal text-gray-500 dark:text-gray-400">{`${new Date(e["msDate"]).getHours()}:${new Date(e["msDate"]).getMinutes()}`}</span>
                        </div>  
                    </div>
                )
            ))}
        </div>
    )
}