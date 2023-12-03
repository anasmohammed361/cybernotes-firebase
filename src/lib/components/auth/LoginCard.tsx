import { Button, Card, Input, Typography } from "@material-tailwind/react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const handleLogin = async ()=>{
   try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/home')
   } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      toast.error(error!.message)
   }
  }
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            crossOrigin={undefined}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            } }

            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }} crossOrigin={undefined}          />
        </div>

        <Button className="mt-6" fullWidth onClick={handleLogin}>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Create an account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default LoginCard;
