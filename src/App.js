import React, { useState } from "react";
import Title from "./components/Title";
import Main from "./components/Main";
import Button from "./components/Button";
import bulbOFF from "./images/bulbOFF.png";
import bulbON from "./images/bulbON.png";

export default function App() {
  let [state, setState] = useState(true);

  function turnOn() {
    const image = document.querySelector(".image");

    if (state) {
      image.setAttribute("src", bulbON);
      setState(() => (state = false));
    } else {
      image.setAttribute("src", bulbOFF);
      setState(() => (state = true));
    }
  }
  return (
    <div className="container">
      <Title state={state} />
      <Main />
      <Button toggle={turnOn} />
    </div>
  );
}
