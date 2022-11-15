import React , {useEffect, useState} from 'react'
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import AuthService from '../../services/auth.service';


const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);



 const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState(undefined);

  useEffect(() =>{
    const user = AuthService.getCurrentUser();

    if(user){
      setCurrentUser(user);
    }

  },[]);

  const logOut = () =>{
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  }




  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
      <img src="truck.png" style={{width:"33px",height:"33px", marginRight:"10px"}} />
        Transport Log
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>User Managment
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/customers" exact>
                <i 
                className="far fa-clone">
                </i>Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/systemsection" exact>
                <i 
                className="far fa-chart-bar">
                </i>System Sections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/supportstatuses" exact>
                <i 
                className="far fa-copy">
                </i>Support Statuses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/docks" exact>
                <i 
                className="far fa-copy">
                </i>Docks
              </NavLink>
            </li>
             {currentUser ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout" exact onClick={logOut}>
                <i 
                className="far fa-copy">
                </i>Logout
              </NavLink>
            </li> ) : (
               <li className="nav-item">
               <NavLink className="nav-link" to="/login" exact>
                 <i 
                 className="far fa-copy">
                 </i>Login
               </NavLink>
             </li>
              )}
        </ul>
      </div>
  </nav>
  </>
  )
}
export default Navbar;