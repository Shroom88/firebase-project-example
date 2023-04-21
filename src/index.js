import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FirebaseContext from "./FirebaseContext";
import { firestore } from "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firestore}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
