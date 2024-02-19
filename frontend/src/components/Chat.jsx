import { Ballon } from "./Ballon";


export function Chat({ chatInfo, user }) {
    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col justify-between h-full pt-10 px-10 pb-100">
                {chatInfo.length > 0? (
                    <Ballon chatInfo={chatInfo} user={user}/>
                ): (
                    <div>Abra um chat</div>
                )}
            </div>
        </div>
    )
}