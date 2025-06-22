import React, { useState } from "react";

export default function AddItem({ setItems }) {
  const [form, setForm] = useState({ name: "", type: "", description: "" });
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...form,
      coverImage: URL.createObjectURL(coverImage),
      additionalImages: Array.from(additionalImages).map((img) =>
        URL.createObjectURL(img)
      ),
    };
    setItems((prev) => [...prev, newItem]);
    setSuccess(true);
    e.target.reset();
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Item Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <select required onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="">Select Type</option>
          <option>Shirt</option>
          <option>Pant</option>
          <option>Shoes</option>
          <option>Sports Gear</option>
        </select>
        <textarea required placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <input required type="file" accept="image/*" onChange={(e) => setCoverImage(e.target.files[0])} />
        <input multiple type="file" accept="image/*" onChange={(e) => setAdditionalImages(e.target.files)} />
        <button type="submit">Add Item</button>
      </form>
      {success && <p className="success">Item successfully added</p>}
    </div>
  );
}
