import React from "react";

export default function Place({ place }) {
  return (
    <div className="place">
      {place.data().name}
      {place.data().adress}
      {place.data().like}
    </div>
  );
}
