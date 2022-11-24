import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Customers from "./pages/Customers/Customers";
import SupportStatuses from "./pages/SupportStatuses/SupportStatuses";
import SystemSections from "./pages/SystemSections/SystemSections";
import Logout from "./pages/Logout/Logout";
import UserManagment from "./pages/UserManagment/UserManagment";
import Home from "./pages/Home/Home";
import Docks from "./pages/Docks/Docks";
import Navbar from "./Components/Navbar/Navbar";
import Registrationform from "./pages/SignUp/registration";
import Loginform from "./pages/LogIn/Login";
import AuthService from "./services/auth.service";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/usermanagment" element={<UserManagment />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/systemsection" element={<SystemSections />} />
            <Route path="/supportstatuses" element={<SupportStatuses />} />
            <Route path="/docks" element={<Docks />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
             <Route path="/" element={<Loginform/>}/>
            <Route path="/login" element={<Loginform />} />
            <Route path="/registration" element={<Registrationform />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
