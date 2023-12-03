import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '../lib/firebase'
import { Navigate } from "react-router-dom"


const Root = () => {
    const [user,loading,error] = useAuthState(auth)

if (loading) {
    return <p>load</p>
}
if (error) {
    return <p>error</p>
}
if (user) {
    return <Navigate to="/home"  />
}else{
    return <Navigate to="/signup"  />
}
}

export default Root
