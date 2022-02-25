import React from "react";
import background from "../../Icons/back.png";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form" style={{ background: { background } }}>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
