import React, { useState } from "react";
import { db } from "../../utils/firebase";

export default function AddPlace({ category }) {
  let [address, setAddress] = useState("");
  let [image, setImage] = useState("");
  let [name, setName] = useState("");

  function submit() {
    let placeObjects = {
      address: address,
      image: image,
      name: name,
      like: 0,
      category: category
    };
    db.collection("places").add(placeObjects);
  }
  return (
    <div>
      <div>
        <input
          placeholder="address"
          value={address}
          onChange={ev => setAddress(ev.target.value)}
        />

        <input
          placeholder="name"
          value={name}
          onChange={ev => setName(ev.target.value)}
        />

        <input
          placeholder="imageURL"
          value={image}
          onChange={ev => setImage(ev.target.value)}
        />

        <button onClick={() => submit()}>submit</button>
      </div>
    </div>
  );
}
