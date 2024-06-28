import Add from "./icons/add";
import Home from "./icons/home";
import Recordings from "./icons/recordings";
import Upcoming from "./icons/upcoming";
import History from "./icons/history";
export const Links=[{
    name:"Home",
    path:"/meets",
    icon: <Home class="w-6 h-6" fill="#ffffff" />
},
{
    name:"Scheduled",
    path:"/meets/scheduled",
    icon:<Upcoming  class="w-6 h-6" fill="#ffffff"/>
},
{
    name:"History",
    path:"/meets/history",
    icon: <History  class="w-6 h-6" fill="#ffffff"/>
},
{
    name:"Recordings",
    path:"/meets/recordings",
    icon:<Recordings class="w-6 h-6" fill="#ffffff" />
},
{
    name:"Create New",
    path:"/meets/new-meeting",
    icon:<Add class="w-6 h-6" fill="#ffffff" />
}
]
