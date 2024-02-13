import React, { useEffect } from 'react';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';
// import Studentdashboard from './Studentdashboard';

const Dashboard = ({ children }: any) => {
  const userType = store.getState().user.userType;
  const navigate = useNavigate();
  
  useEffect(() => {

    switch (userType) {
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