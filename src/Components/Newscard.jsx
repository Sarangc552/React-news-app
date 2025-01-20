import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const readmore = (url) => {
  window.open(url);
};
const Newscard = ({ data }) => {
  return (
    <div className="news-card-container">
      {data.map((test, index) => {
        if (!test.urlToImage) {
          return null;
        } else {
          return (
            <Card style={{ width: "18rem" }} className="cardcontainer">
              <Card.Img
                variant="top"
                src={test.urlToImage || "https://via.placeholder.com/150"}
                alt={test.title}
              />
              <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Text>
                  {test.description || "Description not available."}
                </Card.Text>
                <Button variant="danger" onClick={() => readmore(test.url)}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default Newscard;
