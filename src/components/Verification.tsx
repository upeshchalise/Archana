import React from "react";
import Logo from "./Logo";
import ButtomLogo from "./ButtomLogo";
import OTPInput from "./OTPInput";
import SocialBtn from "./SocialBtn";

const Verification = () => {
  return (
    <div className="flex flex-col items-center w-[19.5rem] max-h-full mx-auto ">
      <Logo />
      <section className=" rounded-lg w-full h-max-full flex flex-col mt-10 pb-20 p-4 gap-3 z-40 opacity-100 bg-white shadow-customShadow text-center">
        <p className="text-xs mt-2">Enter the OTP sent to +977 XXX-XXXXXXX</p>
        <OTPInput />
        <p className="text-gray-500 text-xs mt-3">
          Didn&apos;t receive OTP?{" "}
          <span className="text-[#1F8F2A] text-sm">Resend 0:30 </span>
        </p>
        <button
          type="button"
          className="rounded-lg text-white font-semibold p-2 mt-6 bg-[#1F8F2A]"
        >
          Verify & Continue
        </button>
        <p className="text-gray-500">OR</p>
        <SocialBtn />
      </section>

      <ButtomLogo />
    </div>
  );
};

export default Verification;
