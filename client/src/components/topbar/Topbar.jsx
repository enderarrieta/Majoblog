import { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from '../../context/Context'
import { useState } from "react";
import "./topbar.css";
import React from "react";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const [bar, setBar] = useState('hola')

  const handleKeyDown = (event) => {
    if (window.scrollY > 1) {
      setBar('adios')
    } else {
      setBar('hola')
    }
    console.log(bar)
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleKeyDown);
    };
  }, []);

  return (
    <div className={`top ${bar}`} id="barra">
      <div className="topLeft" id="logo">
        <a href="https://www.facebook.com/BurbujaMajo" target="_blank">
          <i className="fa circle fb fa-facebook"></i>
        </a>
        <a href="https://twitter.com/Belfegorchan" target="_blank">
          <i className="fa circle fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/majodesignstudio/" target="_blank">
          <i className="fa circle fa-instagram" style={{ backgroundColor: "#ff81b8" }}></i>
        </a>
        <a href="https://www.pinterest.ca/" target="_blank">
          <i className="fa circle fa-pinterest" style={{ backgroundColor: "#edd3ff" }}></i>
        </a>
        <span><Link to="/home">
          <img src={PF + 'logo.jpg'} alt="" className="gato" />
        </Link></span>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/characters">
              CHARACTERS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/works">
              PORTFOLIO
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
