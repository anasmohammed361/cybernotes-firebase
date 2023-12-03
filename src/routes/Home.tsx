import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Signout from "../lib/components/home/Signout";
import { Accordionx } from "../lib/components/home/Accordionx";
import { FileUpload } from "../lib/components/home/InputDialog";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>load</p>;
  }
  if (error) {
    <p>error</p>;
  }
  console.log(user);
  
  if (user) {
    return (
      <main>
        <div className="flex justify-between  px-10 pt-10">
          <h1 className="text-4xl font-bold">CyberNotes <span className="text-sm text-gray-600">({user.email})</span></h1> 
          <div className="flex gap-2">
            <Signout />
            <FileUpload />
          </div>
        </div>
        <Accordionx />
      </main>
    );
  } else {
    return <Navigate to={"/signup"}></Navigate>;
  }
};

export default Home;
