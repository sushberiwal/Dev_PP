import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Profile = () => {
  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme ? "lightgray" : "black" ,
    color: theme ? "black" : "white",
    padding: "2rem",
    margin:"2rem"
  };

  return <div style={styles}>Profile Component</div>;
};

export default Profile;
