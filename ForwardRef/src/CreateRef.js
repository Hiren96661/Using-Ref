import React from "react";
import { useRef } from "react";
import Input from "./Input";

const CreateRef = () => {
    let inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.focus();
      };
  return (
    <>
        <div style={{ border: "1px solid red", width: "400px" }}>
            <b> Parent Component </b>
            <br />
            <br />
        <Input ref={inputRef}/>
        <button style={{ margin: "8px" }} onClick={handleClick}> 
        Click!
        </button>
        </div>
    </>
  )
};

export default CreateRef;
