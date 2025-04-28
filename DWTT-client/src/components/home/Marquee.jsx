import React from "react";
import Container from "../ui/Container";
import { destinations } from "@/utils/constants";

export default function Marquee({ styles }) {
  function getDestinationName(index) {
    return destinations[index % destinations.length].name;
  }

  return (
    <section className="py-6 lg:py-12 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 z-0">
      <h3
        className={`w-full text-center absolute top-0 left-[50%] translate-x-[-50%] py-2 font-bold text-3xl lg:text-7xl text-green-900 ${styles}`}
      >
        MOSTLY VISIT
      </h3>
      <Container width={90}>
        <div className="relative flex items-center justify-center py-6 overflow-hidden z-10">
          <div className="absolute top-0 flex animate-marquee whitespace-nowrap">
            {destinations.map((item, i) => (
              <div key={i} className="flex items-center mx-4 shrink-0">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-3 shadow-md pl-2 shrink-0">
                  <img
                    src={item.icon}
                    alt="Destination icon"
                    className="rounded-full bg-white/20 p-1 w-8 h-8 object-cover"
                  />
                  <span className="text-white font-normal text-sm whitespace-nowrap px-4 pl-0">
                    {getDestinationName(i)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee-reverse whitespace-nowrap">
            {destinations.map((item, i) => (
              <div
                key={`item-${i}`}
                className="flex items-center mx-4 shrink-0"
              >
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-3 shadow-md pl-2 shrink-0">
                  <img
                    src={item.icon}
                    alt="Destination icon"
                    className="rounded-full bg-white/20 p-1 w-8 h-8 object-cover"
                  />
                  <span className="text-white font-normal text-sm whitespace-nowrap px-4 pl-0">
                    {getDestinationName(i)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
