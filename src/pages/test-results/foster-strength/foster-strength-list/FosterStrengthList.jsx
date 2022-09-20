import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FosterStrengthCard from "./FosterStrengthItem/FosterStrengthCard";
import "@splidejs/react-splide/css";
const FosterStrengthList = () => {
  return (
    <div className="mb-10 mt-5">
      <Splide
        options={{
          rewind: true,
          width: "auto",
          type: "loop",
          perPage: 3,
          perMove: 1,
          padding: "2rem",
          gap: 10,
          breakpoints: {
            400: {
              perPage: 1,
            },
            800: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
            1440: {
              perPage: 3,
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
