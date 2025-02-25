import React from "react";
import Gallery from "../components/Gallery";

const figure = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  image: `/ganesh-portfolio/images/figure (${i + 1}).jpeg`,
  title: `Award ${i + 1}`
}));

const Figure = () => (
  <section className="content">
    <h1>LIFE FIGURES</h1>
    <Gallery items={figure} />
  </section>
);

export default Figure;
