import React from "react";

export default function Banner() {
  return (
    <section className="relative h-160 bg-mint">
      <div className="w-full h-full bg-bottom bg-banner opacity-80" />
      <div className="absolute w-full font-extrabold text-center text-white uppercase opacity-65 top-64">
        <h2 className="mb-2 text-5xl">We Are</h2>
        <p className="text-5xl">Bao Familly</p>
      </div>
    </section>
  );
}
