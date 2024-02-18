import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


const INITIAL_STATE: any = {
   links: [
    { path: "courses", name: 'Courses', roleID: 0, icon: ShoppingCartIcon },
    { path: "following", name: 'Following', roleID: 0, icon: DashboardIcon },
    { path: "modules", name: 'Modules', roleID: 0, icon: ViewModuleIcon },
   ]
};

const links = {
  name: 'links',
  state: INITIAL_STATE,
};

export default links;
