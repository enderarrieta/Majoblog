import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Choose a category to search for!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c => (

            <li className="sidebarListItem">
              <Link className="link" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>

          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">





          <a href="https://www.facebook.com/BurbujaMajo" target="_blank">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/Belfegorchan" target="_blank">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/majodesignstudio/" target="_blank">
            <i className="sidebarIcon fab fa-instagram-square" ></i>
          </a>
          <a href="https://www.pinterest.ca/" target="_blank">
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>

        </div>
      </div>
    </div>
  );
}
