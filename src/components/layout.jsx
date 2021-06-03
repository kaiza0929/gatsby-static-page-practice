import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div style={{display: "flex", margin: "7%"}}>
                    {this.props.children}
                </div>
                <Footer />
            </>
        );
    }
}

export default Layout;