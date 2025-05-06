import React from "react";

const DetailsTabAdditionalInfo = () => {
  return (
    <section className="md:-px-[60px] px-[20px] sm:px-[40px] lg:px-[80px] xl:px-[207px]">
      <div
        dangerouslySetInnerHTML={{
          __html: `<h2>Additional Information</h2>

    <h3>Materials & Craftsmanship</h3>
    <p>Our furniture is crafted from premium, sustainably sourced materials, including solid hardwoods, top-grain leather, and high-quality fabrics. Each piece is meticulously constructed by skilled artisans to ensure durability and timeless elegance.</p>

    <h3>Design & Style</h3>
    <p>Featuring a blend of modern and classic designs, our furniture collection offers versatile styles to complement any interior. From minimalist Scandinavian influences to bold industrial aesthetics, every piece is designed to enhance your living space.</p>

    <h3>Comfort & Functionality</h3>
    <p>Ergonomically designed for maximum comfort, our sofas, chairs, and beds are built with supportive cushioning and adjustable features. Functional elements like hidden storage compartments and modular configurations add practicality to everyday living.</p>

    <h3>Sustainability</h3>
    <p>We prioritize eco-friendly practices, using non-toxic finishes and recycled materials wherever possible. Our commitment to sustainability ensures that your furniture is not only beautiful but also kind to the environment.</p>

    <h3>Warranty & Care</h3>
    <p>All furniture comes with a 5-year warranty covering manufacturing defects. Care instructions are provided to help you maintain the beauty and longevity of your pieces, ensuring they remain in pristine condition for years to come.</p>`,
        }}
      />
    </section>
  );
};

export default DetailsTabAdditionalInfo;
