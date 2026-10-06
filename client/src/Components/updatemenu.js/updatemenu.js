import React, { useState } from "react";

export function UpdateMenu({ dish, onUpdate, onCancel }) {
  const [name, setName] = useState(dish.name);
  const [price, setPrice] = useState(dish.price);
  const [desc, setDesc] = useState(dish.desc || "");
  const [image, setImage] = useState(dish.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDish = { ...dish, name, price, desc, image };

    fetch(`http://localhost:5000/menu/${dish.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDish)
    })
      .then(res => res.json())
      .then(data => {
        onUpdate(data); // pass updated dish back to parent
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="wine-form p-4">
      <h3 style={{ color: "#e0a96d" }}>Update Dish</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="wine-input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Dish name"
        />
        <textarea
          className="wine-input"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Description"
        />
        <input
          className="wine-input"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          className="wine-input"
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit" className="btn-golden mt-3">Save</button>
        <button type="button" className="btn-danger mt-3 ms-2" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
