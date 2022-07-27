import "./App.css";
import React from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Blogs />
    </div>
  );
}

export default App;
