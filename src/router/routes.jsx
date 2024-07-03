import AddchartIcon from '@mui/icons-material/Addchart';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
const routes = [
    {
        path: "/",
        content: "Asosiy",
        icon: <AddchartIcon/>
    },
    {
        path: "/orders",
        content: "Buyurtmalar",
        icon: <DryCleaningIcon/>
    },
    {
        path: "/xizmatlar",
        content: "Xizmatlar",
        icon: <MiscellaneousServicesIcon/>
    },
]

export default routes