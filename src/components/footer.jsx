import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

class Footer extends React.Component {

    render() {
        return (
            <Card>
                <CardContent style={{display: "flex"}}>
                    <CardMedia component="img" src="https://github.com/meu29.png" style={{width: "10%"}} />
                    <Typography gutterBottom variant="h5" component="h4">@meu29</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Footer;