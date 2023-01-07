import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TimeAgo from "timeago-react";
import "./news_item.css";

function NewsItem({ post }) {
  const { title, author, excerpt, date_gmt, read_time, seo, slug } = post;

  const nav = useNavigate();

  const onItemClick = () => {
    nav(`/${slug}`);
  };
  const thumbnail = seo?.image;

  return (
    <Container>
      <Row
        className="justify-content-md-center item-container"
        onClick={onItemClick}
      >
        <Col className="image" xs={6} md={4}>
          <img src={thumbnail} alt={title + " image"} />
        </Col>
        <Col xs={12} md={8}>
          <div className="desc">
            <h2 className="title">{title}</h2>
            <div className="excerpt">{excerpt}</div>
            <div className="author">
              <img src={author.avatar_url} alt="author-profile" />
              {author.display_name} . <TimeAgo datetime={date_gmt} /> .{" "}
              {read_time} min read
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsItem;
