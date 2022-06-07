import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Table />
    </>
  );
}

export default App;
