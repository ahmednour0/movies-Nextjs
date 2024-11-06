import React from "react";
import ReusableSwiper from "../Swiper/Swiper";

const TVShowsSwiper = () => {
  return (
    <div>
      <ReusableSwiper
        endpoint="https://api.themoviedb.org/3/trending/tv/week"
        apiKey={"4477a975e3f21a0e9846875761c80e5b"}
      />
    </div>
  );
};

export default TVShowsSwiper;
