import React from "react";
import "./Card.css";
import Link from "next/link";

const Card = ({ item }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original/";

  const {
    id,
    title,
    original_name,
    original_title,
    vote_average,
    overview,
    release_date,
    first_air_date,
    poster_path,
    backdrop_path,
    poster,
  } = item;

  const media_type = item.media_type ? item.media_type : "tv";

  const imageUrl = IMG_URL + (poster_path || backdrop_path);

  return (
    <Link href={`/${media_type}/${id}`} className="link ">
      <div className="container my-3">
        <div className="wrapper hover:opacity-80">
          <div
            className="banner-image "
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <h1 className="sm:text-xs lg:text-xl">
            {" "}
            {title || original_name || original_title}
          </h1>
          <p className="line-clamp-3 lg:text-lg sm:text-xs">{overview}</p>
          <p className="text-sm ">Release Date {release_date || first_air_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
