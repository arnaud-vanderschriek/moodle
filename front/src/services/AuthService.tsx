import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../store'


const AuthService = ({ isAuthenticated }: any) => {
  if(!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

const mapState = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapState, null)(AuthService);

