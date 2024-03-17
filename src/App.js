import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Feed />
      <Footer />
    </>
  );
};

export default App;
