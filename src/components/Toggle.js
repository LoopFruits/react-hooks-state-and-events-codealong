import React, {useState} from "react";



function Toggle() {

  const [isOn,setIsOn] = useState(false);
  // ... the rest of Toggle component
  // Whenever you're using a React hook, it must be within a React component. We're setting the initial state here as false, because the button should be "OFF" when the component first renders.

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  // if the button is on the color will be red, if not then the color will be white 
  const color = isOn ? "red" : "white";

  return (
    
    <button style={{ background: color }} onClick={handleClick}>
      { isOn ? "ON" : "OFF" }
    </button>
    
  );
}

export default Toggle;
 