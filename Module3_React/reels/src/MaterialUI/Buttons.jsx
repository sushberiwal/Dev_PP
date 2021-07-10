import React from "react";
import { Button , IconButton } from "@material-ui/core";
import {Send , Delete} from "@material-ui/icons"
const Buttons = () => {
  return (
    <div>
      <Button variant="contained">Hello</Button>
      <Button variant="outlined">Hello</Button>
      <Button variant="text">Hello</Button>

      <h2>Color and Event Listener</h2>
      {/* inline styling */}
      <Button style={ {marginLeft:"10px" , backgroundColor:"red" , color:"white"}  } variant="contained">Hello</Button>
      <Button onClick={ ()=> alert("Button Clicked !!!") } variant="contained" color="secondary">Hello</Button>

      <h2>Icons Inside Buttons</h2>
      <Button variant="contained" color="primary" startIcon={<Send></Send>}>Send</Button>
      <Button variant="contained" color="primary" endIcon={<Delete></Delete>}>Delete</Button>

      <h2>Size</h2>
      <Button variant="contained" color="primary" size="small" startIcon={<Send></Send>}>Send</Button>
      <Button variant="contained" color="primary" size="large" endIcon={<Delete></Delete>}>Delete</Button>

      <h2>Icons</h2>

      <IconButton>
          <Delete onClick={ ()=> alert("Delete") }></Delete>
      </IconButton>

    
    
    </div>
  );
};

export default Buttons;
