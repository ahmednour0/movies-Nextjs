"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const tmdbAPI = "4477a975e3f21a0e9846875761c80e5b";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchTVShows = async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${tmdbAPI}&language=en-US&page=${page}`
    );
    if (response.status === 200) {
      const data = await response.json();
      const tvShows = data.results;
      const totalPages = data.total_pages;

      setTvShows(tvShows);
      setTotalPages(totalPages);
    }
  };

  useEffect(() => {
    fetchTVShows(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="max-w-screen-3xl mx-auto py-4 px-4">
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {tvShows.map((tvshow, id) => {
          return <Card key={id} item={tvshow} media_type="tv" />;
        })}
      </div>

      <div className="flex justify-center mt-4">
        <div>
          <button
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-700"
                : "bg-blue-500 text-white"
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>


          <button
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-700"
                : "bg-blue-500 text-white"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
