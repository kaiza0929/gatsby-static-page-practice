import React from "react";
import Layout from "./../components/layout";
import { withStyles, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { navigate, graphql } from "gatsby";
import NoImage from "./../images/no_image.jpg";

var styles = theme => ({
    card: {
       marginBottom: "2%"
    },
    cardActionArea: {
        display: "flex"
    },
    cardImage: {

    }
});

class Index extends React.Component {

    render() {

        var { classes } = this.props;

        return (
            <Layout>
                <div style={{width: "80%", margin: "2%"}}>
                    {this.props.data.allMarkdownRemark.nodes.map((node) => {
                        return (
                            <Card key={node.id} className={classes.card}>
                                <CardActionArea className={classes.cardActionArea} onClick={() => navigate(`/article?id=${node.id}`)}>
                                    <img src={NoImage} className="classes.cardImage" alt="no image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            { node.frontmatter.date }
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { node.frontmatter.title }
                                        </Typography>
                                        {/* descriptionが存在しないエラー <Typography gutterBottom variant="h6" component="h3">
                                            { node.frontmatter.description }
                                        </Typography>*/ }
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })}
                </div>
            </Layout>
        );

    }
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id,
                frontmatter {
                    date
                    title
                }
            }
        }
    }
`

export default withStyles(styles, { withTheme: true })(Index);