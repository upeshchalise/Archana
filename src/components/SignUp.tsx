import React from "react";
import Link from "next/link";
import ButtomLogo from "./ButtomLogo";
import SocialBtn from "./SocialBtn";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center w-[19.5rem] max-h-full mx-auto ">
      <section className=" rounded-lg w-full h-max-full flex flex-col mt-10 pb-18 p-4 gap-3 z-40 opacity-100 bg-white shadow-customShadow">
        <h3 className="font-semibold text-xl pt-1">Get Started</h3>
        <input
          type="text"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="Enter email or username"
        />
        <input
          type="text"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="Enter email or username"
        />
        <input
          type="password"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="Enter Password"
        />
        <input
          type="password"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="Confirm Password"
        />
        <button
          type="button"
          className="rounded-lg text-white font-semibold p-2 mt-4 bg-[#1F8F2A]"
        >
          Sign Up
        </button>
        <div className="text-gray-500 text-center mt-4">
          <Link href="/phoneNumber">
            <p className="text-xs">Register with Phone Number</p>
          </Link>
          <h5 className="mt-4">OR</h5>
        </div>
        <SocialBtn />
        <Link href="/membership">
          <p className="text-xs text-center text-[#1F8F2A] mt-1">
            Get a membership
          </p>
        </Link>
      </section>
      <ButtomLogo />
    </div>
  );
};

export default SignUp;
