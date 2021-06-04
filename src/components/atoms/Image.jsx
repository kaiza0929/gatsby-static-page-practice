import React from "react";

var Image = ({ className, src }) => {
    return (
        <img className={className} src={src} alt="" width="100%" height="100%" />
    )
}

export default Image;