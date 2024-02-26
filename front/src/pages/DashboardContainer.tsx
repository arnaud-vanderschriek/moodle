import React, { useEffect } from 'react';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';


const DashboardContainer = ({ children }: any) => {
  const roleID = store.getState().user.user.roleID;
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(roleID, 'roleId in DashboardContainer')
    switch (roleID) {
      case 1:
        navigate('/dashboard/student');
        break
      case 2:
        navigate('/dashboard/teacher');
        break;
      case 3:
        navigate('/dashboard/admin');
        break;
    }
  })

  return (
    <>
      { children }
    </>
  );
};

export default DashboardContainer;