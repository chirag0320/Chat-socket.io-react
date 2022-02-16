import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
const Join = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div>
          <input
            placeholder="name"
            className="jointInput"
            onChange={(e) => setname(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="room"
            className="jointInput mt-20"
            onChange={(e) => setroom(e.target.value)}
            type="text"
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            Sing In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
