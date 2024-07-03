import Add from "./icons/add";
import Home from "./icons/home";
import Recordings from "./icons/recordings";
import Upcoming from "./icons/upcoming";
import History from "./icons/history";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
export const Links=[{
    name:"Home",
    path:"/myjobs",
    icon: <FaShoppingBag className="w-6 h-6" />
},
{
    name:"Scheduled",
    path:"/job/saved",
    icon:<FaHeart  className="w-6 h-6" />
}
]
