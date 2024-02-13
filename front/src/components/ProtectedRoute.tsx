import React from 'react'
import { Navigate, Outlet, Routes } from 'react-router-dom'
import { RootState } from '../store'
import { connect } from 'react-redux'

const ProtectedRoute = ({ isAuthenticated }: any) => {
    if(!isAuthenticated) {
      return <Navigate to={"/"} />;
    }

   return <Outlet />
};

const mapState = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapState, null)(ProtectedRoute)