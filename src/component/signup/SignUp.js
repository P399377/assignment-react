import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useParams, useNavigate } from "react-router-dom";

function SignUp() {
  let history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://assignment-nodejs.onrender.com/signup",
        {
          name,
          email,
          password,
        }
      );
      history("/login");
      // console.log(response.data);
      // Do something with the response, such as displaying a success message to the user
    } catch (error) {
      console.error(error);
      // Do something with the error, such as displaying an error message to the user
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUp;
