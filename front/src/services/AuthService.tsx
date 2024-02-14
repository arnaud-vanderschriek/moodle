import { connect } from 'react-redux'
import { RootState } from '../store'
import { Navigate, Outlet } from 'react-router-dom'


const AuthService = ({ isAuthenticated }: any) => {
  console.log("taratata")
  if(!isAuthenticated) {
    console.log("test", "valeur de isAuthenticated: ", isAuthenticated)
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

const mapState = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapState, null)(AuthService);

