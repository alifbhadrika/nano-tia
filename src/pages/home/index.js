import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NewsItem from "../../components/NewsItem";
import "./home.css";
import useNewsList from "./useNewsList";

function HomePage() {
  const { posts } = useNewsList();

  return (
    <Container>
      <Row>
        <Col>
          <div className="hero">
            <div className="hero-inner">
              <h1>
                You look like someone who
                <span className="inline-block">
                  appreciates quality journalism.
                </span>
              </h1>
              <p>
                If you value our reporting about the Asian tech scene, help us
                ensure it continues.
              </p>
              <Button className="primarybtn" type="button">
                Subscribe today
              </Button>
            </div>
          </div>
          {posts &&
            posts.map((post) => {
              return <NewsItem post={post} key={post.slug} />;
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
