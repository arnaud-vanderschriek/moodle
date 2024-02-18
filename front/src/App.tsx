import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/Studentdashboard';
import TeacherDashboard from './pages/Teacherdashboard';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/DashboardContainer';
import NotFound from './pages/NotFound';
import AuthService from './services/AuthService';


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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
