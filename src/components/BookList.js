import React from "react";
import { Col, Row, Spin } from "antd";
import BookCard from "./BookCard";
import InfiniteScroll from "react-infinite-scroller";

export default class BookList extends React.Component {
  books = require("../assets/books.json").map((book) => (
    <Col key={book.id} span={6} style={{ padding: "10px" }}>
      <BookCard book={book} />
    </Col>
  ));
  constructor(props) {
    super(props);

    this.state = {
      inc: 8,
      hasMore: this.books.length > 8,
      displayedBooks: this.books.slice(0, 8),
    };
  }

  fetchMoreBooks = () => {
    if (
      this.state.displayedBooks.length + this.state.inc >=
      this.books.length
    ) {
      this.setState((state, props) => ({
        hasMore: false,
        displayedBooks: this.books.slice(),
      }));
    } else {
      this.setState((state, props) => ({
        hasMore: true,
        displayedBooks: this.books.slice(
          0,
          state.displayedBooks.length + state.inc
        ),
      }));
    }
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <InfiniteScroll
          loadMore={this.fetchMoreBooks}
          hasMore={this.state.hasMore}
          loader={
            <div style={{ textAlign: "center" }}>
              <Spin tip={"Loading..."} />
            </div>
          }
        >
          <Row className={"book-list"}>{this.state.displayedBooks}</Row>
        </InfiniteScroll>
      </div>
    );
  }
}
