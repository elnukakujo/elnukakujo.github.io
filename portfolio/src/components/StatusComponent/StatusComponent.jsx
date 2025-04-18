import Profile from "../../assets/img/noe_aout_2022.png";

const status = {
    type:"busy",
    message:"Intern at AppOX"
}

function StatusComponent() {
    const getStatusColor = () => {
        switch (status.type) {
            case "busy":
                return "orange-500";
            case "available":
                return "green-500";
            case "away":
                return "yellow-500";
            default:
                return "gray-500";
        }
    };
    return (
        <div className="flex flex-row gap-4 -mt-1 items-center">
            <img src={Profile} alt="Portrait of Noé Jager" className='rounded-full size-12' />
            <div className="flex flex-col">
                <p>Noé Jager</p>
                <div className="flex flex-row gap-2 items-center">
                <div class="size-3 rounded-full bg-[linear-gradient(90deg,_rgba(255,197,110,1)_0%,_rgba(255,140,0,1)_40%,_rgba(255,186,67,1)_70%,_rgba(255,230,128,1)_100%)]"></div>
                <p className="text-xs">{status.message}</p>
                </div>
            </div>
        </div>
    );
}

export default StatusComponent;