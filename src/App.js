import "./App.css";
import React from "react";
import Metamask from "./component/Metamask";
import Header from "./component/Header";
import MainPage from "./component/MainPage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <MainPage />
      {/* <Metamask /> */}
    </div>
  );
}

export default App;
