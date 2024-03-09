import React from "react";
import { benifits } from "../utils/constant";
import BenifitsCard from "./BenifitsCard";

const Benifits = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col lg:gap-20 gap-10">
        {benifits.map((card, i) => (
          <BenifitsCard key={i} index={i} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Benifits;
