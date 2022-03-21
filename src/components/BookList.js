import React from "react";
import { Col, Row, Spin } from "antd";
import BookCard from "./BookCard";
import InfiniteScroll from "react-infinite-scroller";

export default class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inc: 8,
      books: [],
      hasMore: false,
      displayedBooks: [],
    };
  }

  componentDidMount() {
    const books = require("../assets/books.json");

    this.setState((state, props) => ({
      books: books,
      hasMore: books.length > state.inc,
      displayBooks: books.slice(0, state.inc),
    }));
  }

  fetchMoreBooks = () => {
    if (
      this.state.displayedBooks.length + this.state.inc >=
      this.state.books.length
    ) {
      this.setState((state, props) => ({
        hasMore: false,
        displayedBooks: state.books.slice(),
      }));
    } else {
      this.setState((state, props) => ({
        hasMore: true,
        displayedBooks: state.books.slice(
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
          <Row className={"book-list"}>
            {this.state.displayedBooks.map((book) => (
              <Col key={book.id} span={6} style={{ padding: "10px" }}>
                <BookCard book={book} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </div>
    );
  }
}
