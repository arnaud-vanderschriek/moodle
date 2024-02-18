import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Icon } from '@mui/material';


export const SideBar = ({ onClick, links }: any) => {
  return (
    <React.Fragment>
      {links.map((item: any, index: any) => (
        <ListItemButton key={index} onClick={() => onClick(item.path)}>
          <ListItemIcon>        
            <Icon key={index} component={item.icon} />    
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </React.Fragment>
  )
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved Assessments
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);