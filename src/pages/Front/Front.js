import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import PlaceCard from "../EachCat/placecard";

export default function Front() {
  let [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      let places = [];
      let ss = await db
        .collection("places")
        .orderBy("like")
        .get();
      ss.forEach(place => places.push(place));

      places.reverse();
      setPlaces(
        places.length < 6 ? places : places.filter((place, i) => i < 6)
      );
    }
    loadPlaces();
  }, []);

  return (
    <div>
      <h1>Wanna Eat?</h1>
      <div>The Most Popular Restaurants</div>
      <div>
        {places.map(place => (
          <PlaceCard key={place.name} p={place} />
        ))}
      </div>
    </div>
  );
}
