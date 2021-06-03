import React from "react";
import { Link } from "gatsby";
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

var styles = theme => ({
    appBar: {
        padding: "1%"
    }
});

class Header extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h5" className={classes.appBar}>
                        Meu Blog
                    </Typography>
                    <Link to="/">記事一覧</Link>
                </Toolbar>
            </AppBar>
        );

    }

}

export default withStyles(styles, { withTheme: true })(Header);