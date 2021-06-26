import React, { useState, useEffect } from "react";
import firebaseAuth from "../config/firebase";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      let response = await firebaseAuth.signInWithEmailAndPassword(
        username,
        password
      );
      let uid = response.user.uid;
      if (uid) {
        console.log(uid);
        setUser(uid);
        setMessage("");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleLogout = async () => {
    await firebaseAuth.signOut();
    setUser(null);
  };

  // componentDidMount and componentDidUpdate
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(user);
      // console.log("auth state changed !!");
      if (user) {
        setUser(user.uid);
      }
    }); //event based code hai ye
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome to Homepage id is {user}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          {" "}
          <h1>Firebase Login</h1>
          <div>
            <div>
              UserName{" "}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div>
              Password{" "}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button onClick={handleLogin}>Login</button>
          <h2 style={{ color: "red" }}>{message}</h2>{" "}
        </>
      )}
    </div>
  );
};

export default Login;
