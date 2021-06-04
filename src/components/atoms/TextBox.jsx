import React from "react";

var TextBox = ({ className, placeholder, onKeyUpFunc }) => {
    return (
        <input type="text" style={{width: "50%", marginBottom: "2%"}} placeholder={placeholder} className={className} onKeyUp={(e) => onKeyUpFunc(e.target.value)} />
    )
}

export default TextBox;