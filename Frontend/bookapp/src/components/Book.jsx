import React from "react";

function Book({ image, title, price }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        width: "200px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ marginTop: "10px" }}>{title}</h3>
      <p style={{ color: "gray" }}>{price}</p>
    </div>
  );
}

export default Book;
