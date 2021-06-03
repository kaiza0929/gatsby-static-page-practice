import React from "react";
import Header from "./header";
import "./layout.css";

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        );
    }
}

export default Layout;