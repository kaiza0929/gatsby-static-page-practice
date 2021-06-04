import React from "react";

var FirstHeading = ({ className, id, text }) => {
    return (
        <h1 className={className} id={id}>{text}</h1>
    )
}

export default FirstHeading;