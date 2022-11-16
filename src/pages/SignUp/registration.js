import React, {useState} from 'react';
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';

const Registrationform = () => {
        const [name, setName] = useState("");
        const [password, setpassword] = useState("");
        const [email, setEmail] = useState("");
        const navigate = useNavigate();

        const handleNameChange = (value) => {
                setName(value);
        };

        const handlePasswordChange = (value) => {
                setpassword(value);
        };

        const handleEmailChange = (value) => {
                setEmail(value);
        };

        const handleSave = () => {
                const data = {
                     UserName: name,
                     Password: password,
                     Email: email
           };


        const url = "https://localhost:7034/api/Authenticate/register"
        axios.post(url, data).then((result) =>{
                alert(result.data);
               
        }).catch((error) => {
                alert(error);
        })
}
        return (
      <div className="Regi-form-container">
      <form className="Regi-form" onSubmit={handleSave}>
        <div className="Regi-form-content">
          <h3 className="Regi-form-title">Registration User</h3>
          <div className="form-group mt-3">
            <label>User name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="User name"
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
          <div className="pt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-4">
             <a href="/login">Back</a>
          </p>
        </div>
      </form>
    </div>
        );
}

export default Registrationform;