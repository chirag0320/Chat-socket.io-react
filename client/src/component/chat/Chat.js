import React, { useState, useEffect } from "react";
import "./Chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../infoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
let socket;
const Chat = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const [messages, setmessages] = useState([]);
  const [message, setmessage] = useState("");
  const [users, setUsers] = useState("");
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);
    setname(name);
    setroom(room);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnet");
      socket.off();
    };
  }, [window.location.search, ENDPOINT]);
  useEffect(() => {
    socket.on("message", (message) => {
      setmessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setmessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        {/* <InfoBar room={room} /> */}
        {/* <Messages messages={messages} name={name} /> */}
        {/* <Input
          message={message}
          setmessage={setMessage}
          sendmessage={sendMessage}
        /> */}
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setmessage}
        />
      </div>
      <TextContainer users={users} room={room} />
    </div>
  );
};

export default Chat;
