import React from "react";
import Gallery from "../components/Gallery";

const awards = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `/ganesh-portfolio/images/awards_${i + 1}.jpg`,
  title: `Award ${i + 1}`
}));

const Awards = () => (
  <section className="content">
    <h1>AWARDS</h1>
    <Gallery items={awards} />
  </section>
);

export default Awards;
