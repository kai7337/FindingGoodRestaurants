import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PlaceCard({ p, incrementLike }) {
  let data = p.data();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1562102010-558d6be6268e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.address}</Card.Text>
        <Button variant="primary" onClick={() => incrementLike(p)}>
          👍 {data.like} likes
        </Button>
      </Card.Body>
    </Card>
  );
}
