import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {store} from './store';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Studentdashboard from './pages/Studentdashboard';
import Teacherdashboard from './pages/Teacherdashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const isAuthenticated = store.getState().user.isAuthenticated;

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' Component={LoginForm} />
              {
                isAuthenticated ? (
                  <>
                    <SideBar />
                    <Route path='/dashboard'>
                      <Dashboard>
                        {store.getState().user.userType === 0 && <Studentdashboard />}
                        {store.getState().user.userType === 1 && <Teacherdashboard />}
                        {store.getState().user.userType === 2 && <AdminDashboard />}
                      </Dashboard>
                    </Route>
                  </>
                ) : (
                  <Route path='/' Component={LoginForm} />
                )
              }
            </Routes>
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
