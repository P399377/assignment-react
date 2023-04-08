import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import TablePage from "./pages/TablePage";
import Navbar from "./component/navbar/Navbar";
import AddUser from "./component/adduser/AddUser";
import EditUser from "./component/edituser/EditUser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
