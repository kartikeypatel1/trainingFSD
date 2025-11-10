import React from "react";
import Book from "./components/Book.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const books = [
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.I905-ukAAUAxiTvIkBH69gHaKT?pid=Api&P=0&h=180",
      title: "Math",
      price: "$20",
    },
    {
      image:
        "https://tse4.mm.bing.net/th/id/OIP.H72wpyOfj69xQQ0wOuHlnAHaHa?pid=Api&P=0&h=180",
      title: "Chemistry",
      price: "$32",
    },
    {
      image:
        "https://tse4.mm.bing.net/th/id/OIP.04Sdnuwg_UpPiL3vhPG16QHaJQ?pid=Api&P=0&h=180",
      title: "Physics",
      price: "$25",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {books.map((b, i) => (
          <Book key={i} image={b.image} title={b.title} price={b.price} />
        ))}
      </div>
    </>
  );
}

export default App;
