"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSwiper = ({ endpoint, apiKey }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=4477a975e3f21a0e9846875761c80e5b&language=en-US`
        );
        const genres = response.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenres(genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    async function fetchData() {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: "4477a975e3f21a0e9846875761c80e5b",
          },
        });
        setData(response.data.results);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchGenres();
    fetchData();
  }, [endpoint, apiKey]);

  if (error) {
    return <div className="text-red-500">Failed to load data.</div>;
  }

  return (
    <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    pagination={{ clickable: true }}
    loop
    className="w-full h-screen overflow-hidden cursor-pointer"
  >
    {data.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex flex-col justify-center p-6 md:p-16">
            <div className="text-white space-y-4 md:space-y-6 max-w-lg drop-shadow-lg">
              <div className="flex flex-wrap items-center space-x-2 md:space-x-3">
                <span className="bg-yellow-600 text-white font-bold px-2 py-1 rounded text-xs md:text-sm">
                  Release Date:
                </span>
                <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded text-xs md:text-sm">
                  {item.release_date || item.first_air_date}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {item.title || item.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg leading-relaxed">
                {item.overview}
              </p>
              <div className="flex flex-wrap items-center space-x-2 md:space-x-3">
                <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded text-xs md:text-sm">
                  TV-MA
                </span>
                <span className="flex items-center space-x-1">
                  <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded text-xs md:text-sm">
                    ⭐ {Math.floor(item.vote_average)}
                  </span>
                </span>
                <span className="uppercase text-xs md:text-sm">
                  {item.media_type}
                </span>
                {item.genre_ids.map((id) => (
                  <span key={id} className="text-xs md:text-sm">
                    {genres[id]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Image
            width={1440}
            height={600}
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title || item.name}
            className="object-cover w-full h-full"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default HeroSwiper;
