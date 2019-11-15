import React, { useState, useEffect, useRef, useContext } from "react";
import { db, firebase } from "../../utils/firebase";
import { Pagination, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./eachcats.scss";
import PlaceCard from "./placecard";
import AddPlace from "./addPlace";
import UserContext from "../../utils/userContext";

export default function EachCat({ match, history }) {
  let [cat, setCat] = useState(undefined);
  let [places, setPlaces] = useState([]);
  let [page, setPage] = useState(1);
  let bottomDiv = useRef(undefined);

  let admin = useContext(UserContext);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(bottomDiv.current);
  //     console.log(bottomDiv.current.getBoundingClientRect().top);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    (async () => {
      let doc = await db
        .collection("FoodCategory")
        .doc(match.params.catId)
        .get();

      let placesSS = await db
        .collection("places")
        .where("category", "==", match.params.catId)
        .get();

      setCat(doc);
      setPlaces([...placesSS.docs]);
    })();
  }, []);

  async function incrementLike(p) {
    await db
      .collection("places")
      .doc(p.id)
      .update({
        like: firebase.firestore.FieldValue.increment(1)
      });

    let doc = await db
      .collection("places")
      .doc(p.id)
      .get();

    setPlaces(places => places.map(pp => (pp.id === p.id ? doc : pp)));
  }

  if (!cat) return <div>loading.....</div>;
  return (
    <div className="EachCat">
      <h2>{cat.data().category}</h2>
      {admin && <AddPlace category={match.params.catId} />}
      <div className="cards">
        {places.map(p => (
          <PlaceCard key={p.id} p={p} incrementLike={incrementLike} />
        ))}
      </div>

      <div>
        <Pagination>
          {new Array(10)
            .fill(0)
            .map((_, i) => i + 1)
            .map(v => (
              <Pagination.Item
                active={v === page}
                onClick={() => history.push(`/food/${match.params.catId}/${v}`)}
              >
                {v}
              </Pagination.Item>
            ))}
        </Pagination>
      </div>

      <div ref={bottomDiv} />
    </div>
  );
}
