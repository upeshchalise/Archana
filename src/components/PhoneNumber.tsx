"use client";

import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import ButtomLogo from "./ButtomLogo";
import CustomDropdown from "./CustomDropdown";
import SocialBtn from "./SocialBtn";

const PhoneNumber = () => {
  return (
    <div className="flex flex-col items-center w-[19.5rem] max-h-full mx-auto ">
      <Logo />
      <section className=" rounded-lg w-full h-max-full flex flex-col text-center mt-10 pb-11 p-4 gap-3 z-40 opacity-100 bg-white shadow-customShadow">
        <p className="mt-2 text-[#1F8F2A]">Enter Your Phone Number</p>
        <p className="text-xs">
          We will send you the 6-digit verification code
        </p>
        <div className="w-full flex justify-between gap-2 mb-6">
          <CustomDropdown />
          <input
            type="text"
            className="w-[11.625rem] border-2 rounded-lg p-2 text-center"
            placeholder="Phone Number"
          />
        </div>
        <p className="text-xs text-gray-500">Didn&apos;t get the code?</p>
        <Link href="/verification">
          <button
            type="button"
            className="rounded-lg text-white font-semibold p-2 mt-6 bg-[#1F8F2A]"
          >
            Generate OTP
          </button>
        </Link>
        <h5 className="mt-2 text-gray-500">OR</h5>
        <SocialBtn />
        <p className="text-xs mt-3">
          New User?
          <Link href="/signup">
            <span className="text-[#1F8F2A]">Register here</span>
          </Link>
        </p>
      </section>
      <ButtomLogo />
    </div>
  );
};

export default PhoneNumber;
