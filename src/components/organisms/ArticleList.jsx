import React, { useState } from "react";
import SecondHeading from "./../atoms/SecondHeading";
import Card from "./../molecules/Card";
import TextBox from "./../atoms/TextBox";
import Button from "./../atoms/Button";

var ArticleList = ({ articles }) => {

    var [state, setState] = useState({
        keyword: "",
        start_index: 0
    });

    return (
        <div style={{marginLeft: "10%"}}>
            <div style={{display: "flex", marginLeft: "10%", marginBottom: "2%"}}>
                <SecondHeading text="最新記事" />
                <TextBox className="form-control" placeholder="キーワードを入力" onKeyUpFunc={(keyword) => setState({...state, keyword: keyword})} />
            </div>
            <div>
                {articles.filter((article) => article.title.match(state.keyword)).slice(state.start_index, state.start_index + 5).map((article) => {
                    return (<Card card_image_src={article.urlToImage} card_title={article.title} card_texts={{content: article.content, date: article.publishedAt, url: article.url, name: article.source.name}}/>);
                })}
            </div>
            <div>
                {state.start_index >= 5 && articles.filter((article) => article.title.match(state.keyword)).length > 5 && (
                    <Button className="btn btn-link" text="前の5件" onClickFunc={() => setState({...state, start_index: state.start_index - 5})}/>
                )}
                {state.start_index + 5 < articles.filter((article) => article.title.match(state.keyword)).length && (
                    <Button className="btn btn-link" text="次の5件"onClickFunc={() => setState({...state, start_index: state.start_index + 5})}/>
                )}
            </div>
        </div>
    );
}

export default ArticleList;