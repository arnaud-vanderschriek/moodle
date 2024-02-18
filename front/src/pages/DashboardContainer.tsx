import React, { useEffect } from 'react';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';
import NotFound from './NotFound';


const DashboardContainer = () => {
  const roleID = store.getState().user.roleID;
  const navigate = useNavigate();

  switch (roleID) {
    case 0:
      navigate('/dashboard/student');
      break
    case 1:
      navigate('/dashboard/teacher');
      break;
    case 2:
      navigate('/dashboard/admin');
      break;
  }

  return (
     <NotFound />
  );
};

export default DashboardContainer;