import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import { FaChevronRight } from "react-icons/fa";
import { RootState } from "@/redux/store";

const Categories = () => {
  const { categories } = useSelector((state: RootState) => state.category);

  const renderCategory = categories.map((category) => {
    return (
      <ul
        key={category?.id}
        className="border border-slate-300 my-2 bg-category rounded-md"
      >
        <Category {...category} />
      </ul>
    );
  });

  return (
    <>
      <div className="flex justify-between mt-4 mb-1">
        <h2 className="text-base font-medium">Categories</h2>
        <button>
          <p className="flex text-gray-500 text-xs items-center">
            See more
            <span>
              <FaChevronRight />
            </span>
          </p>
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-1">
        {renderCategory}
      </div>
    </>
  );
};

export default Categories;
