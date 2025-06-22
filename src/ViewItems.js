// ViewItems.js
import React, { useState } from "react";
import ItemModal from "./ItemModal";

export default function ViewItems({ items, deleteItem }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <h2>Items</h2>
      <div className="items">
        {items.length === 0 && <p>No items available.</p>}
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img
              src={item.coverImage}
              alt={item.name}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: "pointer" }}
            />
            <p>{item.name}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
