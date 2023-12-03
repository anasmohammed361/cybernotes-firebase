import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Root from "./routes/Root";
import Login from "./routes/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
