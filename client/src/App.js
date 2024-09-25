import React from "react";
import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Layout from "./Layout.js";
import IndexPage from "./pages/IndexPage.js";
import LoginPage from "./pages/LoginPage.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={"/login" }element={<LoginPage />} />
        <Route index element={<IndexPage />}/>
        <Route path="/Register" element={<Register />}/>
      </Route>
    </Routes>
  );
}

export default App;
