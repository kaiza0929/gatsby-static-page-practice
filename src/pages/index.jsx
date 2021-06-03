import React from "react";
import Layout from "./../components/layout";
import { withStyles, TextField, Card, CardActionArea, CardContent, Typography, Button } from "@material-ui/core";
import { navigate, graphql } from "gatsby";

var styles = theme => ({
    card: {
       marginBottom: "2%",
       width: "80%"
    },
    cardActionArea: {
       // display: "flex"
    },
    cardImage: {
        width: "40%"
    }
});

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {keyword: "", start_index: 0};
    }

    render() {

        var { classes } = this.props;

        return (
            <Layout>
                <div style={{width: "80%"}}>
                    <h2>最新記事</h2>
                    <div style={{width: "100%"}}>
                        <TextField id="filled-basic" label="Filled" variant="filled" onKeyUp={(e) => this.setState({keyword: e.target.value})} />
                    </div>
                    <div>
                        {this.props.data.allMarkdownRemark.nodes.slice(this.state.start_index, this.state.start_index + 5).map((node) => {
                            if (node.frontmatter.title.match(this.keyword) !== null || node.html.match(this.keyword) !== null) {
                                var date = new Date(node.frontmatter.date);
                                return (
                                    <Card key={node.id} className={classes.card}>
                                        <CardActionArea className={classes.cardActionArea} onClick={() => navigate(`/article?id=${node.id}`)}>
                                            {/*<CardMedia image={NoImage} className={classes.cardImage} alt="no image" />*/}
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    { node.frontmatter.title }
                                                </Typography>
                                                 <Typography gutterBottom variant="h6" component="h3">
                                                    { node.frontmatter.description }
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="h6">
                                                    { date.getFullYear() + "/" + (date.getMonth() + 1).toString() + "/" + date.getDate()}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                );
                            }
                        })}
                    </div>
                    <div>
                        {this.state.start_index >= 5 && (
                            <Button variant="contained" color="primary" onClick={() => this.setState({start_index: this.state.start_index - 5})}>
                                前の5件
                            </Button>
                        )}
                        {this.state.start_index + 5 <= this.props.data.allMarkdownRemark.nodes.length - 1 && (
                            <Button variant="contained" color="primary" onClick={() => this.setState({start_index: this.state.start_index + 5})}>
                                次の5件
                            </Button>
                        )}
                    </div>
                </div>
            </Layout>
        );

    }
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                html
                frontmatter {
                    date
                    title
                    description
                }
            }
        }
    }
`

export default withStyles(styles, { withTheme: true })(Index);