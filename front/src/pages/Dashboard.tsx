import React, { useEffect } from 'react';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({ children }: any) => {
  const roleID = store.getState().user.roleID;
  const navigate = useNavigate();
  
  useEffect(() => {
    switch (roleID) {
      case 0:
        navigate('/dashboard/student/*');
        break
      case 1:
        navigate('/dashboard/teacher/*');
        break;
      case 2:
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

export default Dashboard;