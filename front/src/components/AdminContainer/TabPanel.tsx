import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCourses from './AddCourses';
import AddUser from './AddUser';
import AddModules from './AddModules';
import SendMail from './SendMail';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'full' }}>
        <h2>Registration.</h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Send Mail" {...a11yProps(1)} />
          <Tab label="Courses" {...a11yProps(2)} />
          <Tab label="Modules" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AddUser />

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SendMail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddCourses />
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={3}>
        <AddModules />
      </CustomTabPanel>
    </Box>
  );
}