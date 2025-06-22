import React from "react";

export default function ItemModal({ item, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{item.name}</h3>
        <p>Type: {item.type}</p>
        <p>{item.description}</p>
        <div className="carousel">
          {item.additionalImages.map((src, i) => (
            <img key={i} src={src} alt={`img-${i}`} />
          ))}
        </div>
        <button onClick={() => alert("Enquiry sent!")}>Enquire</button>
      </div>
    </div>
  );
}
