"use client";

import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { RootState } from "@/redux/store";
import Items from "../week_deals/Items";

const Carts = () => {
  const { weekItems } = useSelector((state: RootState) => state.weekDeal);

  const renderItems = weekItems.map((items) => {
    return (
      <ul key={items.id} className=" my-2 ">
        <Items {...items} />
      </ul>
    );
  });

  return (
    <>
      <div className="items-center w-notification mx-auto">
        <nav className="flex justify-between">
          <ul className="flex gap-3 items-center">
            <Link href="/home">
              <BsArrowLeft color="gray" />
            </Link>
            <span>My Cart</span>
          </ul>
          <button>Delete</button>
        </nav>

        <div className="flex justify-between mt-4">
          <h2 className="text-base font-medium">Just For You</h2>
          <button>
            <p className="flex text-gray-500 text-xs items-center">
              See more
              <span>
                <FaChevronRight />
              </span>
            </p>
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-3">
          {renderItems}
        </div>
      </div>
    </>
  );
};

export default Carts;
