import React from "react";
import Gallery from "../components/Gallery";

const awards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  image: `/images/awards (${i + 1}).jpg`,
  title: `Award ${i + 1}`
}));

const Awards = () => (
  <section className="content">
    <h1>Awards</h1>
    <Gallery items={awards} />
  </section>
);

export default Awards;
