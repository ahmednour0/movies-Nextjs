import DataCastSwiper from "@/app/components/dataSwiper/DataCastSwiper";
import Image from "next/image";
import React from "react";
import "./styles.css";

const DetailsPage = async ({ params }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const { id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4477a975e3f21a0e9846875761c80e5b`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  const {
    title,
    vote_average,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    original_language,
    budget,
    revenue,
  } = data;
  const imageUrl = IMG_URL + (poster_path || backdrop_path);
  const imageBackdrop = IMG_URL + backdrop_path;

  const year = release_date ? new Date(release_date).getFullYear() : "N/A";

  return (
    <>
<div
  className="relative w-full h-screen text-white"
  style={{
    backgroundImage: `url(${imageBackdrop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
  <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 py-6 md:flex-row md:justify-start">
    <div className="animate-fade-in mt-10 mb-6 md:mb-0 md:mr-8">
      <Image
        src={imageUrl}
        alt={title}
        width={180} // Smaller width for mobile
        height={270} // Maintain aspect ratio
        className="rounded-lg shadow-lg mt-12 md:w-64 md:h-auto"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="text-left max-w-xl animate-fade-in-delayed p-4 md:p-6 bg-black bg-opacity-50 rounded-lg w-full md:w-auto">
      <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-amber-400">
        {title} <span className="text-white">({year})</span>
      </h1>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        <span className="font-bold text-amber-400">Language:</span>{" "}
        {original_language}
      </p>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        <span className="font-bold text-amber-400">Overview:</span>{" "}
        {overview}
      </p>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        <span className="font-bold text-amber-400">Rating:</span>{" "}
        {vote_average ? vote_average.toFixed(1) : "N/A"}
      </p>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        <span className="font-bold text-amber-400">Budget:</span> $
        {budget.toLocaleString()}
      </p>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        <span className="font-bold text-amber-400">Revenue:</span> $
        {revenue.toLocaleString()}
      </p>
    </div>
  </div>
</div>

<div className="py-4 bg-gray-900">
  <DataCastSwiper id={id} mediaType="movie" />
</div>

    </>
  );
};

export default DetailsPage;
