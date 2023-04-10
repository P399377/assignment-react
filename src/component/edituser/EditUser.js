import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./edituser.css";
const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
    subject: "",
  });
  const { name, username, age, email, subject } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://assignment-nodejs.onrender.com/updateuser/${id}`,
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
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `https://assignment-nodejs.onrender.com/getuser/${id}`
    );
    console.log(result.data);
    setFormData(result.data);
  };
  return (
    <>
      <h2>Update User</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            placeholder="Enter Your age"
            name="age"
            value={age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter Your number"
            name="subject"
            value={subject}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit">Update User</button>
      </form>
    </>
  );
};

export default EditUser;
