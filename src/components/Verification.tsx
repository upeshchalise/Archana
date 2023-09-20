"use client";

import React from "react";
import Logo from "./Logo";
import ButtomLogo from "./ButtomLogo";
import SocialBtn from "./SocialBtn";
import Link from "next/link";
import OTPInputs from "./OTPInputs";

const Verification = () => {
  return (
    <div className="flex flex-col items-center w-[19.5rem] max-h-full mx-auto ">
      <Logo />
      <section className=" rounded-lg w-full h-max-full flex flex-col mt-10 pb-14 p-4 gap-5 z-40 opacity-100 bg-white shadow-customShadow text-center">
        <p className="text-xs mt-2 ">Enter the OTP sent to +977 XXX-XXXXXXX</p>
        <OTPInputs length={6} />
        <p className="text-gray-500 text-xs mt-3">
          Didn&apos;t receive OTP?{" "}
          <span className="text-[#1F8F2A] text-sm">Resend 0:30 </span>
        </p>
        <Link href="/login">
          <button
            type="button"
            className="rounded-lg text-white w-full font-semibold p-2 mt-6 mb-2 bg-[#1F8F2A]"
          >
            Verify & Continue
          </button>
        </Link>
        <p className="text-gray-500">OR</p>
        <SocialBtn />
        <p className="text-xs mt-8">
          New User?
          <Link href="/signup">
            <span className="text-[#1F8F2A] ml-1">Register here</span>
          </Link>
        </p>
      </section>

      <ButtomLogo />
    </div>
  );
};

export default Verification;
