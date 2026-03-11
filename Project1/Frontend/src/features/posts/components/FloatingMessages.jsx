import React from "react";
import { RiMessengerLine } from "react-icons/ri";
import "../style/floatingMessages.scss";

function FloatingMessages() {
  return (
    <div className="floating-messages">
      <RiMessengerLine className="icon" />
      <span>Messages</span>
    </div>
  );
}

export default FloatingMessages;