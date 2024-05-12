import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card"
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>

      <Card UserName = "Pawan Kumar" btnName = "Hire Me"/>
      <Card UserName = "Nishant Kumar"/>
      <Card UserName = "Manas Kumar" btnName = "Get in touch"/>
    </>
  );
}

export default App;
