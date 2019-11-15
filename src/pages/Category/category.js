import React, { useState, useEffect, useContext } from "react";
import { db } from "../../utils/firebase";
import { addDays } from "date-fns";
import Place from "../Front/Place";
import { Card, Button, Row, CardDeck } from "react-bootstrap";
import { FullScreenLoading } from "../../components/loading.js/loading";
import { Link } from "react-router-dom";

export default function Category({ match }) {
  let [cats, setCats] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFromDB() {
      let snapshot = await db.collection("FoodCategory").get();
      setCats(snapshot.docs);
      setIsLoading(false);
    }
    loadFromDB();
  }, []);

  //load from data base
  return (
    <div className="Food">
      <h1>Categories</h1>

      <div
        className="categoryCards"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {cats.map(cat => (
          <CategoryCard key={cat.id} cat={cat} />
        ))}
      </div>

      {false && isLoading && <FullScreenLoading />}
    </div>
  );
}

function CategoryCard({ cat }) {
  let data = cat.data();
  return (
    <Card
      style={{
        width: "10rem",
        margin: "10px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1562102010-558d6be6268e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Card.Title>{data.category}</Card.Title>
        <div style={{ flexGrow: 1 }}>restraurants</div>
        <Link to={`/food/${cat.id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
