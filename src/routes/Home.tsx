import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [user,loading,error] = useAuthState(auth)
  const handleSignOut =async ()=>{
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error);
      
    }
  }
 if (loading) {
    return <p>load</p>
 }
 if (error) {
  <p>error</p>
 }
 if (user) {
  return (
    <div>
    <button onClick={handleSignOut}> signout</button>
    </div>
  )
 }else{
  return <Navigate to={"/signup"}></Navigate>
 }
}

export default Home
