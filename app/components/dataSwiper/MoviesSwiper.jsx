import React from "react";
import ReusableSwiper from "../Swiper/Swiper";

const MoviesSwiper = () => {
  return (
    <ReusableSwiper
      endpoint="https://api.themoviedb.org/3/trending/movie/day"
      apiKey={"4477a975e3f21a0e9846875761c80e5b"}
    />
  );
};

export default MoviesSwiper;
