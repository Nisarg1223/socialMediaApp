import React from "react";
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
          <FiHeart className="icon" />
          <span className="text">Notifications</span>
        </li>

        <li>
          <FiPlusSquare className="icon" />
          <span className="text">Create</span>
        </li>

        <li>
          <FiUser className="icon" />
          <span className="text">Profile</span>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;