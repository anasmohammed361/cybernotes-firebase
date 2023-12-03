import { Button } from "@material-tailwind/react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Signout = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleSignOut}>SignOut</Button>;
};

export default Signout;
