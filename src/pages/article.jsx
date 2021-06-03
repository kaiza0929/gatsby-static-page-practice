import React from "react";
import Layout from "./../components/layout";
import { graphql, StaticQuery } from "gatsby";

class Article extends React.Component {
    render() {
        return (//data)
            <Layout>
                <div style={{margin: "7%"}}>
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
                    var article = datas.allMarkdownRemark.nodes.find((data) => data.id == this.props.location.search.replace(/\?id=/, ""));
                    return (
                        <>
                            <div>
                                <h2>{article.frontmatter.title}</h2>
                            </div>
                            <div>
                                <p>{article.frontmatter.date}</p>
                            </div>
                            <div>
                                {/* htmlとして埋め込む */}
                                <div dangerouslySetInnerHTML={{ __html: article.html }} />
                            </div>
                        </>
                    )
                }} />
                    {/*<div><a href="/article">前の記事</a>と<a href="/article">後の記事</a></div>*/}
                </div>
            </Layout>
        )
    }

}

export default Article;