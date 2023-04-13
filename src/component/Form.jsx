import React, { useState } from "react";
import styled from "./Form.module.css";
const Form = () => {
  const [username, setUserName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [aadhar, setAadhar] = useState(" ");
  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([
      ...userData,
      {
        username,
        email,
        phone,
        aadhar
      }
    ]);
    setUserName("");
    setEmail("");
    setPhone("");
    setAadhar("");
  };

  const handleDel = (idx) => {
    const updatedList = userData.filter((elem, index) => idx !== index);
    setUserData(updatedList);
  };
  return (
    <div className={styled.conatiner}>
      <h1>ENTRANCE REGISTRATION </h1>
      <div className={styled.formcontainer}>
        <div className={styled.leftside}>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username </label>
            <input
              type="text"
              placeholder="Please Enter Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <br />
            <br />

            <label htmlFor="email">Email </label>
            <input
              type="text"
              placeholder="Please Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <br />

            <label htmlFor="phone">Contact No </label>
            <input
              type="number"
              placeholder="Please Enter Contact No"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <br />
            <br />

            <label htmlFor="Aadhar No"> Aadhar No </label>
            <input
              type="number"
              placeholder="Please Enter Aadhar No"
              onChange={(e) => setAadhar(e.target.value)}
              value={aadhar}
            />
            <br />
            <br />

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <div className={styled.rightside}>
          <h3>USERNAME : {username}</h3>
          <h3>EMAIL : {email}</h3>
          <h3>PHONE : {phone}</h3>
          <h3>AADHAR NO : {aadhar}</h3>
        </div>
      </div>

      <div className={styled.tableContainer}>
        <table cellPadding="20px" cellPadding="12px" border="5px">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>AADHAR NO</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.aadhar}</td>
                <td>
                  <span onClick={() => handleDel(idx)}>❌</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Form;
