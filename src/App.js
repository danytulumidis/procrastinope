import React from "react";
import "./App.scss";

// Components
import Description from "./components/Description/Description";
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
  return (
    <div>
      <Description />
      <Pomodoro />
    </div>
  );
}

export default App;
