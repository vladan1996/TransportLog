import React, { useState }from 'react';
import './Login.css';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
        const [name, setName] = useState("");
        const [password, setPassword] = useState('');
        const navigate = useNavigate();


        const handleNameChange = (value) => {
                setName(value);
        };

        const handlePasswordChange = (value) => {
                setPassword(value);
        };

        const handleLogin = async (e) =>{
          e.preventDefault();
          try{
            await AuthService.login(name,password).then(
              ()=> {
                navigate("/home")
                window.location.reload();
              },
              (error) =>{
                console.log(error);
              }
            ); 
          }
          catch (err){
            console.log(err)
          }
        }      


        return (
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
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
          <div className="pt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2 pt-3">
            If you don't have account <a href ="/registration">create!</a>
          </p>
        </div>
      </form>
        </div>
        );
}

export default Loginform;