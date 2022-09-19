import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FosterStrengthCard from "./FosterStrengthItem/FosterStrengthCard";
import "@splidejs/react-splide/css";
const FosterStrengthList = () => {
  return (
    <div className="mb-10">
      <Splide
        options={{
          rewind: true,
          width: "auto",
          type: "loop",
          perPage: 3,
          perMove: 1,
          padding: "2rem",
          gap: 20,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            1440: {
              perPage: 5,
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <FosterStrengthCard />
        </SplideSlide>
        <SplideSlide>
          <FosterStrengthCard />
        </SplideSlide>
        <SplideSlide>
          <FosterStrengthCard />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default FosterStrengthList;
