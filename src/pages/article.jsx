import React from "react";
import Layout from "./../components/layout";
import { graphql, StaticQuery } from "gatsby";
import { Card, CardContent, Typography } from "@material-ui/core";

class Article extends React.Component {

    render() {

        return (
            <Layout>
                <div style={{width: "70%"}}>
                <StaticQuery query={graphql`
                    query {
                        allMarkdownRemark {
                            nodes {
                                id
                                html
                                frontmatter {
                                    date
                                    title
                                }
                            }
                        }
                    }`
                } render={(datas) => {
                    var article = datas.allMarkdownRemark.nodes.find((data) => data.id === this.props.location.search.replace(/\?id=/, ""));
                    var date = new Date(article.frontmatter.date);
                    return (
                        <Card>
                            <CardContent>
                                {/* classesがundefiendになるのでスタイル直書き */}
                                <Typography gutterBottom variant="h4" component="h2" style={{marginBottom: "1.5%", textAlign: "center"}}>
                                    {article.frontmatter.title}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h6" style={{marginBottom: "3%", textAlign: "center"}}>
                                    { date.getFullYear() + "/" + (date.getMonth() + 1).toString() + "/" + date.getDate()}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h3" style={{marginBottom: "3%"}}>
                                    {/* htmlとして埋め込む */}
                                    <div dangerouslySetInnerHTML={{ __html: article.html }} />
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }} />
                    {/*<div><a href="/article">前の記事</a>と<a href="/article">後の記事</a></div>*/}
                </div>
            </Layout>
        )
    }

}

export default Article;