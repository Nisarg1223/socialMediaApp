import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiHeart,
  FiPlusSquare,
  FiUser,
} from "react-icons/fi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import '../style/sidebar.scss'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Instagram</div>
      <ul className="menu">
        <li>
          <FiHome className="icon" />
          <span className="text">Home</span>
        </li>

        <li>
          <FiSearch className="icon" />
          <span className="text">Search</span>
        </li>

        <li>
          <FiCompass className="icon" />
          <span className="text">Explore</span>
        </li>

        <li>
          <MdOutlineVideoLibrary className="icon" />
          <span className="text">Reels</span>
        </li>

        <li>
          <RiMessengerLine className="icon" />
          <span className="text">Messages</span>
        </li>

        <li>
           <Link to="/notifications">
          <FiHeart className="icon" />
          
          <span className="text">Notifications</span>
          </Link>
        </li>

        <li>
          <FiPlusSquare className="icon" />
          <span className="text">Create</span>
        </li>

        <li>
           <Link to="/profile">
          <FiUser className="icon" />
          <span className="text">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;