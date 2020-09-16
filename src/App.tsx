import React, { useState, useEffect } from "react";
import "./App.css";
import Test from "./Test";
import cookie from "cookie";

function App() {
  const cookies = cookie.parse(document.cookie);

  useEffect(() => {
    window.onload = function () {
      setTimeout(() => {
        //@ts-ignore
        google.accounts.id.initialize({
          client_id:
            "553680404342-jm4qnp22v7lkm3td6ogrus7o0krign8v.apps.googleusercontent.com",
          callback: handleCredentialResponse,
          cancel_on_tap_outside: true,
          context: "signin",
          native_callback: handleNavtiveCallback,
        });
        //@ts-ignore
        google.accounts.id.prompt();
      }, 0);
    };
  }, []);

  const handleCredentialResponse = (response: any) => {
    fetch("http://localhost:6969", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    });
  };

  const handleNavtiveCallback = (response: any) => {
    console.log(response);
  };

  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
