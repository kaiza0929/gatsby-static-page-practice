import React from "react";
import Image from "./../atoms/Image";
import ThirdHeading from "./../atoms/ThirdHeading";
import Paragraph from "./../atoms/Paragraph";
import Button from "./../atoms/Button";
import "./Card.css";

var Card = ({ card_image_src, card_title, card_texts }) => {
    return (
        <div className="card mb-3" style={{marginBottom: "2%", width: "80%"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Image className="bd-placeholder-img" src={card_image_src} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <ThirdHeading className="card-title" text={card_title}/>
                        <Paragraph className="card-text" text={card_texts.content}/>
                        <Paragraph className="card-text" text={new Date(card_texts.date).toString() + " " + card_texts.name} />
                        <Button className="btn btn-link" style={{marginLeft: "78%"}} text="この記事を読む" onClickFunc={() => window.location.href = card_texts.url} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;