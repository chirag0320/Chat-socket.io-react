import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../../Icons/back.png";
import "./Join.css";
import emailjs from "emailjs-com";
const Join = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const [mail, setmail] = useState("");
  const sendmail = (e) => {
    e.preventDefault();

    console.log("yes i m in");
    emailjs
      .sendForm(
        "gohil2345",
        "template_5t2u9ww",
        e.target,
        "user_JrLsl0N1Pq69ZNg0RHLHr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="joinOuterContainer" style={{}}>
      <form onSubmit={sendmail}>
        <div className="joinInnerContainer">
          <div>
            <input
              name="name"
              placeholder="name"
              className="jointInput"
              onChange={(e) => setname(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <input
              name="room"
              placeholder="room"
              className="jointInput mt-10 "
              onChange={(e) => setroom(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <input
              name="umail"
              placeholder="please mail"
              className="jointInput mt-10 "
              onChange={(e) => setmail(e.target.value)}
              type="text"
            />
          </div>

          <button className="button" type="submit">
            <Link
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              Sing In
            </Link>
          </button>

          {/* <button > mail</button> */}
        </div>
      </form>
    </div>
  );
};

export default Join;
