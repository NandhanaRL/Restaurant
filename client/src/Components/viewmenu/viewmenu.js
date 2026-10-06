import React, { useEffect, useState } from "react";

// Update form component
function UpdateMenu({ dish, onUpdate, onCancel }) {
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
        <button type="submit" className="btn btn-warning mt-3">Save</button>
        <button type="button" className="btn btn-danger mt-3 ms-2" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export function Viewmenu() {
  const [menu, setMenu] = useState([]);
  const [editingDish, setEditingDish] = useState(null);

  // Load menu items
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => setMenu(data))
      .catch(err => console.error(err));
  }, []);

  // Delete dish
  function deleteDish(id) {
    fetch(`http://localhost:5000/menu/${id}`, { method: "DELETE" })
      .then(() => setMenu(menu.filter(dish => dish.id !== id)))
      .catch(err => console.error(err));
  }

  // Handle update callback
  function handleUpdate(updatedDish) {
    setMenu(menu.map(item => (item.id === updatedDish.id ? updatedDish : item)));
    setEditingDish(null); // close form
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ color: "#e0a96d" }}>
        View Menu
      </h2>

      {editingDish ? (
        <UpdateMenu
          dish={editingDish}
          onUpdate={handleUpdate}
          onCancel={() => setEditingDish(null)}
        />
      ) : (
        <div className="row justify-content-center">
          {menu.length === 0 ? (
            <p className="text-center" style={{ color: "#e0a96d" }}>
              No menu items available
            </p>
          ) : (
            menu.map((dish) => (
              <div className="col-sm-10 col-md-6 col-lg-4 mb-4" key={dish.id}>
                <div className="card wine-card text-center">
                  {dish.image && (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.desc}</p>
                    <p><strong>₹{dish.price}</strong></p>
                    <div className="mt-3">
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => setEditingDish(dish)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteDish(dish.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
