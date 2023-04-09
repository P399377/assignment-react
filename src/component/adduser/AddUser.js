import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./adduser.css";

const AddUser = () => {
  let history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
    subject: "",
  });
  const { name, username, age, email, subject } = formData;
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://assignment-nodejs.onrender.com/adduser",
        formData
      );
      history("/table");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="add-user-form">Add A User</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Name </label>
          <input
            type="text"
            className="user-form-input"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>UserName </label>
          <input
            type="text"
            className="user-form-input"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Age </label>
          <input
            type="text"
            className="user-form-input"
            placeholder="Enter Your Age"
            name="age"
            value={age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            className="user-form-input"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Subject </label>
          <input
            type="text"
            className="user-form-input"
            placeholder="Enter Your subject"
            name="subject"
            value={subject}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
