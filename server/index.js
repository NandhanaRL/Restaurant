
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD",
  database: "restaurant"
});

con.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err.message);
  } else {
    console.log("MySQL connected successfully");
  }
});

// Add Menu
app.post("/add-menu", (req, res) => {
  const { name, desc, price, image } = req.body;

  const sql = "INSERT INTO menu (name, description, price, imgurl) VALUES (?, ?, ?, ?)";

  con.query(sql, [name, desc, price, image], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to add dish" });
    }

    res.json({
      id: result.insertId,
      name: name,
      desc: desc,
      price: price,
      image: image
    });
  });
});

// Get Menu
app.get("/menu", (req, res) => {
  const sql = "SELECT id, name, description, price, imgurl AS image FROM menu";

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to get menu" });
    }

    res.json(result);
  });
});

// Update Menu
app.put("/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, desc, price, image } = req.body;

  const sql = "UPDATE menu SET name = ?, description = ?, price = ?, imgurl = ? WHERE id = ?";

  con.query(sql, [name, desc, price, image, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to update dish" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Dish not found" });
    }

    res.json({
      id: id,
      name: name,
      desc: desc,
      price: price,
      image: image
    });
  });
});

// Delete Menu
app.delete("/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const sql = "DELETE FROM menu WHERE id = ?";

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to delete dish" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Dish not found" });
    }

    res.json({
      message: "Dish deleted successfully"
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});