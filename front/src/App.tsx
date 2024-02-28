import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import AuthService from './services/AuthService';
import DashboardContainer from './pages/DashboardContainer';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route 
          path='/dashboard' 
          element={<AuthService />}
        >
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="/dashboard/student" element={<Dashboard />} />
          <Route path="/dashboard/teacher" element={<Dashboard />} />
          <Route path="/dashboard/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
