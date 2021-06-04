import React from "react";

var Button = ({ className, onClickFunc, text, style }) => {
    
    return (
        <button className={className} onClick={onClickFunc} style={style}>{text}</button>
    )
}

export default Button;