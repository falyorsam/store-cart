import { useReducer, useState, useRef, useEffect } from "react";
import React from "react";
import List from "./z-alpha/trash/list.jsx";
import Form from "./z-alpha/trash/form.jsx";
import ThemeContext from "./z-alpha/trash/ContextA.jsx";
import { Slow } from "./z-alpha/Slow.js";
import Starter from "./assets/tutorial/02-useEffect/final/04-fetch-data.jsx";
import Finisher from "./assets/tutorial/11-performance/starter/04-react-18";
const people = [
  { name: "brahim", id: "1" },
  { name: "yessin", id: "2" },
  { name: "ahmed", id: "3" },
  { name: "lamyaa", id: "4" },
];
const App = () => {
  return (
    <>
      <Finisher />
      {/* <Starter /> */}
    </>
  );
};

export default App;
