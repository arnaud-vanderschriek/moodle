import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from '../components/SideBar';
import { secondaryListItems } from '../components/SideBar';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Courses from "../components/StudentContainer/Courses";
import FollowingCourses from '../components/StudentContainer/FollowingCourses';
import LogoutIcon from '@mui/icons-material/Logout';
import CoursesManagement from '../components/AdminContainer/CoursesManagement';
import OverView from '../components/StudentContainer/OverView';
import Works from '../components/StudentContainer/Works';
import Progress from '../components/StudentContainer/Progress';
import { RootState } from '../store';
import CalendarTeacher from '../components/TeacherContainer/CalendarTeacher';
import Download from '../components/TeacherContainer/Download';
import Upload from '../components/TeacherContainer/Upload';
import FeedBack from '../components/TeacherContainer/FeedBack';
import Notes from '../components/TeacherContainer/Notes';
import Learning from '../components/TeacherContainer/Learning';
import CalendarAdmin from '../components/AdminContainer/CalendarAdmin';


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function Dashboard() {
  const links = useSelector((state: RootState) => state.links.links);
  const userStatus = useSelector((state: RootState) => state.user.user.roleID);
  const filtredLinks = links.filter((elem: any) => elem.roleID === userStatus);

  const [open, setOpen] = useState(false);
  const [ selectedMenuItem, setSelectedMenuItem ] = useState(
        userStatus === 1 ? 'overview' :
        userStatus === 2 ? 'calendar' :
        userStatus === 3 ? 'courses' : ''
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItem = (menuItem: any) => {
    setSelectedMenuItem(menuItem)
  }

  const logOut = () => {
    dispatch.auth.logout()
    navigate("/");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: userStatus === 2 ? "pink" 
                              : userStatus === 3 ? "black" 
                                : 'primary'
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {userStatus === 1 && `Moodle - Student Dashboard`}
              {userStatus === 2 && `Moodle - Teacher Dashboard`}
              {userStatus === 3 && `Moodle - Admin Dashboard`}
              
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => logOut() }>
              <Badge color="secondary">
                <LogoutIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <SideBar onClick={handleMenuItem} links={filtredLinks} />
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
                {userStatus === 1 && selectedMenuItem === 'overview' && <OverView /> }
                {userStatus === 1 && selectedMenuItem === 'courses' && <Courses /> }
                {userStatus === 1 && selectedMenuItem === 'work' && <Works /> }
                {userStatus === 1 && selectedMenuItem === 'progress' && <Progress /> }

                {userStatus === 2 && selectedMenuItem === 'calendar' && <CalendarTeacher /> }
                {userStatus === 2 && selectedMenuItem === 'download' && <Download /> }
                {userStatus === 2 && selectedMenuItem === 'upload' && <Upload /> }
                {userStatus === 2 && selectedMenuItem === "feedback" && <FeedBack /> }
                {userStatus === 2 && selectedMenuItem === "note" && <Notes /> }
                {userStatus === 2 && selectedMenuItem === "learning" && <Learning /> }

                {userStatus === 3 && selectedMenuItem === 'courses' && <CalendarAdmin /> }
                {userStatus === 3 && selectedMenuItem === 'works' && <FollowingCourses /> }
                {userStatus === 3 && selectedMenuItem === "registration" && <CoursesManagement /> }
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}