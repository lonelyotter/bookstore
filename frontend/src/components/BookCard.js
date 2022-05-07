import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";

export default function BookCard(props) {
    return (
        <Link
            to={{
                pathname: "/book/" + props.book.id,
            }}
        >
            <Card
                hoverable
                bordered={false}
                cover={
                    <img
                        src={props.book.image}
                        alt={props.book.name}
                        loading
                    />
                }
            >
                <p style={{fontWeight: "bold", fontSize: "large"}}>
                    {props.book.name}
                </p>
                <p style={{color: "red", fontWeight: "bold"}}>
                    ¥ {props.book.price}
                </p>
                <p style={{color: "gray"}}>库存{props.book.inventory}件</p>
            </Card>
        </Link>
    );

}
