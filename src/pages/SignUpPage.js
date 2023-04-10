import React from "react";
import SignUp from "../component/signup/SignUp";

const SignUpPage = () => {
  return (
    <div
      style={{
        // backgroundImage: `url("images/background.jpg")`,
        objectFit: "fill",
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/background.jpg")`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <SignUp />
    </div>
  );
};

export default SignUpPage;
