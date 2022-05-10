import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Card, Button } from "react-bootstrap";

function Home(props) {
  console.warn("props:", props.data);
  return (
    <div>
      {/* <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div> */}
      <h1>Home</h1>
      <div>
        <Card
          style={{
            display: "flex",
            width: "18rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://cdn.mos.cms.futurecdn.net/y9aDsf8tXYa52RDRFf6dNi-1200-80.jpg"
          />
          <Card.Body>
            <Card.Title>I-Phone</Card.Title>
            <Card.Text>Price: $1000.00</Card.Text>
            <Button
              variant="primary"
              onClick={() =>
                props.addToCartHandler({ price: 1000, name: "I-Phone" })
              }
            >
              Add to Cart
            </Button>
            <Button
            style={{marginLeft:'10px'}}
              variant="danger"
              onClick={() =>
                props.removeToCartHandler()
              }
            >
              Remove to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
