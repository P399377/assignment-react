import React from "react";
import { Link } from "react-router-dom";
// import { GrFormView } from "react-icons/gr";
import { useState, useEffect } from "react";
import axios from "axios";
import "./table.css";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (id) => {
    const result = await axios.get(
      "https://assignment-nodejs.onrender.com/getuser"
    );
    setData(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`https://assignment-nodejs.onrender.com/${id}`);
    loadUser();
  };

  return (
    <>
      <div className="table-container">
        <div className="table_header">
          <p>Table Data</p>
          <div>
            <Link className="add-new btn" to="/adduser">
              AddUser
            </Link>
          </div>
        </div>
        <div className="table-section">
          <table className="table-wrapper">
            <thead>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Age</th>
                <th>Eamil</th>
                <th>subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id}>
                  <th>{index + 1}</th>
                  <td>{row.name}</td>
                  <td>{row.username}</td>
                  <td>{row.age}</td>
                  <td>{row.email}</td>
                  <td>{row.subject}</td>

                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/edituser/${row._id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(row._id);
                      }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
