import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Feeds = (props) => {
  const {signOut} = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut();
      props.history.push("/login");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Feeds</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Feeds;
