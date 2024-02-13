import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import LoginForm from './components/LoginForm';
import StudentDashboard from './pages/Studentdashboard';
import TeacherDashboard from './pages/Teacherdashboard';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/Dashboard';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route 
          path='/dashboard' 
          element={<ProtectedRoute />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/student/*" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher/*" element={<TeacherDashboard />} />
          <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
