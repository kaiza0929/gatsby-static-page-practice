import React, { useState, useEffect } from "react";
import Header from "./../components/organisms/Header";
import ArticleList from "./../components/organisms/ArticleList";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

var Index = ({ data }) => {

    var [state, setState] = useState({
        articles: []
    });

    useEffect(() => {
        /*
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2021-06-04&sortBy=popularity&apiKey=d9ed1a79e82749b58e7414386464aad5")
        .then((res) => console.log(res.data.articles))
        .catch((err) => alert(err));
        */
        setState({...state, articles: data.allAssetsJson.edges[0].node.articles});
    }, []);

    return (
        <>
            <Header />
            <ArticleList articles={state.articles}/>
        </>
    );
}

/* jsonのリストに格納された各オブジェクトから特定プロパティの値だけを抜き出している */
export const query = graphql`
    query {
        allAssetsJson {
            edges {
                node {
                    articles {
                        title
                        content
                        publishedAt
                        url
                        source {
                            name
                        }
                        urlToImage
                    }
                }
            }
        }
    }
`

export default Index;