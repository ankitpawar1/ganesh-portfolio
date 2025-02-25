import React from "react";
import Gallery from "../components/Gallery";

const relief = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `/ganesh-portfolio/images/relief (${i + 1}).jpeg`,
  title: `Award ${i + 1}`
}));

const Relief = () => (
  <section className="content">
    <h1>RELIEF WORK</h1>
    <Gallery items={relief} />
  </section>
);

export default Relief;
