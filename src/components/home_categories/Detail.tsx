"use client";

import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";
import Header from "./Header";
import AdSection from "./AdSection";
import Categories from "./Categories";
import Week_Deals from "../week_deals/Week_Deals";
import { products } from "../../../datas/categories";

const Detail = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [result, setResult] = useState<[] | typeof products | null>(null);

  const searchProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = e.currentTarget?.search?.value;

    if (search.trim() === "") {
      console.log("No search");
      return;
    }
    const searchResult = products?.filter(
      (item) => item.category?.toLowerCase().includes(search?.toLowerCase())
    );
    setResult(searchResult);
    console.log(result);

    return searchResult;
  };

  const InputFocusHandler = () => {
    setInputFocus(false);
    setResult(null);
  };

  return (
    <>
      {inputFocus ? (
        <>
          <Header />
          <div className=" text-xs font-semibold flex flex-col gap-1 ">
            <form onSubmit={searchProduct}>
              <div className="flex gap-3 justify-between w-full mt-2 ">
                <BsArrowLeft
                  style={{ width: "40px", height: "30px" }}
                  color="gray"
                  onClick={InputFocusHandler}
                />
                <input
                  id="search"
                  type="text"
                  className="border w-full h-8 pl-1 text-sm rounded-md p-2 focus:bg-gray-100 focus:outline-none focus:border-Green"
                  autoFocus
                />
                <button className="text-Green text-sm" type="submit">
                  Search
                </button>
              </div>
            </form>
            <div className="flex justify-between mt-3 ">
              <p className="text-sm pl-3">Search History</p>
              <Image
                src="/images/Bin.svg"
                alt="trash bin"
                width={16}
                height={20}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {!!result && result?.length == 0 ? (
                <p>No result found</p>
              ) : (
                result?.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="flex flex-col  border w-[8.938rem] rounded-lg relative"
                    >
                      <div className="flex justify-center py-3 mt-2">
                        <Image
                          src={product.image}
                          alt="image of the product"
                          width={65}
                          height={56}
                        />
                      </div>
                      <div className="flex absolute right-4 top-2 items-center gap-1">
                        <PiStarFill
                          style={{ color: "#EBD300", height: "10px" }}
                        />
                        <span>{product.rating}/5</span>
                      </div>
                      <p className="text-base flex font-medium pl-3">
                        {product.name} 1 Kg
                      </p>
                      <p className="text-lg text-Green flex justify-around font-bold">
                        <span>Rs. {product.price} </span>
                        <span>
                          <FiHeart />
                        </span>
                      </p>
                      <div className="px-2 pb-5">
                        <button className="border bg-Green w-full  text-white text-xs rounded-md py-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className=" text-xs font-semibold flex flex-col gap-1 ">
            <h2>Get it in 2 hrs*</h2>
            <div className="flex justify-between">
              <div className="flex gap-1 ">
                <FiMapPin style={{ height: "14px", width: "10px" }} />
                <span> 1234, Kathmandu</span>
              </div>
              <p className="text-Green italic underline">Change Location</p>
            </div>
            <div className="relative w-full text-gray-500 font-normal my-2">
              <input
                type="text"
                className="border w-full h-8 pl-14 text-sm rounded-md p-2 focus:bg-gray-100 "
                placeholder="Search Products"
                onFocus={() => setInputFocus((prevFocus) => !prevFocus)}
              />
              <BiSearch
                style={{
                  position: "absolute",
                  top: "5px",
                  left: "4px",
                  height: "24px",
                  width: "24px",
                }}
              />
            </div>
          </div>
          <AdSection />
          <Categories />
          <Week_Deals />
        </>
      )}
    </>
  );
};

export default Detail;
