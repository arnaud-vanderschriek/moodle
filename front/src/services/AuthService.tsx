import { connect } from 'react-redux'
import { RootState } from '../store'
import { Navigate, Outlet } from 'react-router-dom'


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

