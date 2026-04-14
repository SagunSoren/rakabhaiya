"use client";
import { useState } from "react";
import ImageCard from "./Cards/ImageCard";
import { cormorant } from "@/lib/fonts";
import { handmadeItems } from "@/db/data";
import { categories } from "@/db/data";

const Explore = () => {
  const allItems = handmadeItems;

  // 1. New State for Category
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // 2. Filter logic: Filter items based on category FIRST
  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  // 3. Pagination Logic: Use filteredItems instead of allItems
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // 4. Handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when filter changes!
  };

  // const categories = ["all", "hairpins", "scrunchies", "giftables"];

  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="uppercase tracking-[3]">Our Collection</h1>
        <p
          className={`${cormorant.className} text-6xl font-bold mt-4`}
          id="explore"
        >
          Explore
        </p>
        <div className="h-1 bg-yellow-300 w-20 mx-auto mt-4 mb-8"></div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2 rounded-full border transition-all uppercase text-sm tracking-widest ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-200 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Displaying Current Items */}
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-2 max-lg:px-2 gap-10 px-10 min-h-[400px]">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <ImageCard key={index} data={item} />
          ))
        ) : (
          <div className="col-span-4 text-center py-20 text-gray-400">
            No items found in this category.
          </div>
        )}
      </div>

      {/* Pagination Controls - Only show if there is more than 1 page */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-30"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
