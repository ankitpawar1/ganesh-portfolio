import React from "react";
import Gallery from "../components/Gallery";

const artworks = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `/ganesh-portfolio/images/potrait (${i + 1}).jpeg`,
  title: `Artwork ${i + 1}`
}));

const Portfolio = () => (
  <section className="content">
    <h1>PORTRAIT</h1>
    <Gallery items={artworks} />
  </section>
);

export default Portfolio;
