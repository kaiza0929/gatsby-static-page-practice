/* ヘッダーはorganisms(参考: https://rangle-io.gitbook.io/react-training/index-1/atomic_component_principles) */
import React from "react";
import FirstHeading from "./../atoms/FirstHeading";

var Header = () => {
    return (
        <nav className="navbar navbar-dark bg-info" style={{marginBottom: "3%", height: "60px"}}>
            <div className="container-fluid">
                <FirstHeading className="navbar-brand mb-0 h1" id="title" text="リマインダ" />
            </div>
        </nav>
    )
}

export default Header;