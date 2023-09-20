import React from "react";
import { useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import Items from "./Items";
import { RootState } from "@/redux/store";

const Week_Deals = () => {
  const { weekItems } = useSelector((state: RootState) => state.weekDeal);

  const renderWeekItems = weekItems.map((items) => {
    return (
      <ul key={items.id} className=" my-2 ">
        <Items {...items} />
      </ul>
    );
  });

  return (
    <>
      {/* title */}
      <div className="flex justify-between mt-4">
        <h2 className="text-base font-medium">This Week Deals</h2>
        <button>
          <p className="flex text-gray-500 text-xs items-center">
            See more
            <span>
              <FaChevronRight />
            </span>
          </p>
        </button>
      </div>

      {/* icons */}
      <div className="flex flex-wrap justify-between gap-3">
        {renderWeekItems}
      </div>
    </>
  );
};

export default Week_Deals;
