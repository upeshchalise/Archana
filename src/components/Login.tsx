/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import ButtomLogo from "./ButtomLogo";

const Login = () => {
  return (
    <>
      <Logo />
      <section className=" rounded-lg w-full h-max-full flex flex-col mt-10 pb-20 p-4 gap-5 z-40 opacity-100 bg-white shadow-customShadow">
        <h3 className="font-semibold text-xl pt-1"> Welcome back</h3>
        <input
          type="text"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="Enter email or username"
        />
        <input
          type="password"
          className="border-2 rounded-lg p-2 text-center"
          placeholder="password"
        />
        <Link href="/home">
          <button
            type="button"
            className="rounded-lg text-white font-semibold p-2 w-full mt-6 bg-Green"
          >
            Login
          </button>
        </Link>
        <div className="flex flex-col w-full text-center text-gray-500 text-xs gap-2 my-8">
          <p>Forgot Password / Username?</p>
          <p>
            Don't have an account? <Link href="signup">Signup</Link>
          </p>
        </div>
      </section>
      <ButtomLogo />
    </>
  );
};

export default Login;
