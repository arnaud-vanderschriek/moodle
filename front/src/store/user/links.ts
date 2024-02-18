import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SchoolIcon from '@mui/icons-material/School';

const INITIAL_STATE: any = {
   links: [
    { path: "overview", name: 'Overview', roleID: 1, icon: ViewInArIcon },
    { path: "courses", name: 'Courses', roleID: 1, icon: ShoppingCartIcon },
    { path: "work", name: 'Works', roleID: 1, icon: AddHomeWorkIcon },
    { path: "progress", name: 'Working progress', roleID: 1, icon: AssessmentIcon },

    { path: "calendar", name: 'Calendar', roleID: 2, icon: CalendarMonthIcon },
    { path: "download", name: 'Download', roleID: 2, icon: DownloadIcon },
    { path: "upload", name: 'Upload', roleID: 2, icon: UploadIcon },
    { path: "feedback", name: 'Feedback', roleID: 2, icon: FeedbackIcon },
    { path: "note", name: 'Note', roleID: 2, icon: EditNoteIcon },
    { path: "learning", name: 'Learning', roleID: 2, icon: SchoolIcon },


    { path: "courses", name: 'Courses', roleID: 3, icon: ShoppingCartIcon },
    { path: "following", name: 'Following', roleID: 3, icon: DashboardIcon },
    { path: "modules", name: 'Modules', roleID: 3, icon: ViewModuleIcon },
   ]
};

const links = {
  name: 'links',
  state: INITIAL_STATE,
};

export default links;
