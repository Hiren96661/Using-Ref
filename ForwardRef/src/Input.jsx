import React from 'react'

export default React.forwardRef(function Input (props,ref){
    return (

    <div style={{ border: "1px solid green", width:"300px" }}>
        Child Component
        <br />
        Name  
        <input type="text" ref={ref}  style={{ margin: "32px 0 32px 0" }} />
    </div>
    )
} )