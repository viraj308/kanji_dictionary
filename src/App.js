import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import KanjiDictionary from "./containers/KanjiDictionary";
import SavedKanjiList from "./containers/SavedKanjiList";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanji-dictionary" element={<KanjiDictionary />} />
        <Route path="/saved-kanji-list" element={<SavedKanjiList />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
