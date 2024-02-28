import { store } from '../store';
import { useNavigate } from 'react-router-dom';
import NotFound from './NotFound';


const DashboardContainer = () => {
  const roleID = store.getState().user.user.roleID;
  const navigate = useNavigate();
  
  switch (roleID) {
    case (1):
      navigate('/dashboard/student');
      break;
    case (2):
      navigate('/dashboard/teacher');
      break;
    case(3):
      navigate('/dashboard/admin');
      break;
  }

  return  <NotFound />;
};

export default DashboardContainer;