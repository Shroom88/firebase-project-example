import React, { useState } from "react";
import "./login.css";
import { firestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = () =>
    toast.success("User added to firebase!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    const userCollection = collection(firestore, "users");

    addDoc(userCollection, user).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      notify();
      setUsername("");
      setPassword("");
    });
  };

  return (
    <section className="login">
      <h1 className="login__header">Log In</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <span className="login__divider"></span>

        <input
          className="login__input"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className="login__divider"></span>

        <button type="submit" className="login__submit">
          Login
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;
