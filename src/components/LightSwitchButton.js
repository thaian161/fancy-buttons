import React from 'react';
//import { useState } from "react";

function AngryButton(props) {
  const {light, switchLight} = props
  const handleClick = () => switchLight();

  return (
    <button onClick={handleClick} className="LightSwitchButton">
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  )
}

export default AngryButton;