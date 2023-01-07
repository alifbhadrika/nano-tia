import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { MAX_VIEW_TIMES } from "../../config";
import "./news_detail.css";

import useNewsDetail from "./useNewsDetail";
import TimeAgo from "timeago-react";

function NewsPage() {
  const { currentPost, viewedTimes } = useNewsDetail();
  const disabled = viewedTimes > MAX_VIEW_TIMES;

  const { title, author, date_gmt, read_time, content } = currentPost;
  return (
    <Container>
      {disabled && <h1 className="subscribe">Please subscribe to read more</h1>}
      <Row>
        <Col xs={12} md={8} className="info">
          <img src={author?.avatar_url} alt={title + " image"} />
          {author?.display_name}. <TimeAgo datetime={date_gmt} />. {read_time}{" "}
          min read
          <h1>{title}</h1>
        </Col>
        <Col xs={12} md={8}>
          {content && (
            <div className={disabled ? "disabled" : ""}>
              <div className="article">{parse(content)}</div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default NewsPage;
