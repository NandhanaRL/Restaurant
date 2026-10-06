import React, { useState } from "react";

export function Addmenu() {
  const [dish, setDish] = useState({
    name: "",
    desc: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/add-menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dish)
      });

      const data = await res.json();
      alert("Dish added!");

      setDish({
        name: "",
        desc: "",
        price: "",
        image: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error adding dish");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-20">

          <h2 className="text-center mb-4" style={{ color: "#e0a96d" }}>
            Add Menu
          </h2>

          <form onSubmit={handleSubmit} className="wine-form p-4 rounded shadow">

            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control wine-input"
                placeholder="Dish Name"
                value={dish.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="desc"
                className="form-control wine-input"
                placeholder="Description"
                value={dish.desc}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                name="price"
                className="form-control wine-input"
                placeholder="Price"
                value={dish.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="image"
                className="form-control wine-input"
                placeholder="Image URL"
                value={dish.image}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-light w-100">
              Add Dish
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}