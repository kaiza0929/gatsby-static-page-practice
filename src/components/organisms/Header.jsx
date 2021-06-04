/* ヘッダーはorganisms(参考: https://rangle-io.gitbook.io/react-training/index-1/atomic_component_principles) */
import React from "react";
import { connect } from "react-redux";
import FirstHeading from "./../atoms/FirstHeading";
import Button from "./../atoms/Button";

var Header = ({ dispatch, dark_mode }) => {
    return (
        <nav className="navbar navbar-dark bg-info" style={{marginBottom: "3%", height: "60px"}}>
            <div className="container-fluid">
                <FirstHeading className="navbar-brand mb-0 h1" id="title" text="News" />
                <Button text="ダークモード" className="btn btn-outline-primary" onClickFunc={() => {
                    if (dark_mode == true) {
                        dispatch({type: "OFF"});
                    } else {
                        dispatch({type: "ON"});
                    }
                }} />
            </div>
        </nav>
    )
}

var mapStateToProps = (state) => {
    return {
        dark_mode: state.dark_mode
    }
}

export default connect(mapStateToProps)(Header);