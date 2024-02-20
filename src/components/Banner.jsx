import React from "react";

export default function Banner() {
  return (
    <section className="relative h-160 bg-mint">
      <div className="w-full h-full bg-bottom bg-banner opacity-80" />
      <div className="absolute w-full text-center text-white top-64">
        <h2 className="mb-1 text-5xl">We Are</h2>
        <p className="text-3xl">Bao Familly</p>
      </div>
    </section>
  );
}
