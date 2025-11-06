
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const IsAuthenticate = () => {
    const User=localStorage.getItem('user')
    const ParsedUser=JSON.parse(User!)

    return(
        ParsedUser ? <Outlet/>:<Navigate to="/sign-in"/>

        
    )
}

export default IsAuthenticate