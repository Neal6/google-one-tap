import React, { useState, useEffect } from "react";
import "./App.css";
import Test from "./Test";
import cookie from "cookie";

function App() {
  const cookies = cookie.parse(document.cookie);
  const [open, setOpen] = useState<any>(cookies.username);

  return (
    <div className="App">
      {open && <Test />}
      <button onClick={() => setOpen(true)}>open</button>
    </div>
  );
}

export default App;
