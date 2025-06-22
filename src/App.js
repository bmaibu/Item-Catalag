// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddItem from "./AddItem";
import ViewItems from "./ViewItems";

export default function App() {
  const [items, setItems] = useState([]);

  const deleteItem = (indexToDelete) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Router>
      <nav>
        <Link to="/">View Items</Link> | <Link to="/add">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems items={items} deleteItem={deleteItem} />} />
        <Route path="/add" element={<AddItem setItems={setItems} />} />
      </Routes>
    </Router>
  );
}
