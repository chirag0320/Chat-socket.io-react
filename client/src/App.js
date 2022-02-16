import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/chat/Chat";
const App = () => {
  const param = useParams();
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Join />} />
      </Routes>
      <Routes>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
