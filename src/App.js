/* eslint-disable jsx-a11y/alt-text */
// import { Profiler } from "react";
// import React, { lazy, Suspense } from "react";
// import Stopwatch from "./Stopwatch";
import Navbar from "./components/Navbar";
import Mainbody from "./components/Mainbody";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Mainbody />
      </div>
    </>
  );
}

export default App;
