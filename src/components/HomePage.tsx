import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-[22.5rem] mx-auto">
      <div className="h-[27.25rem] w-full mt-14 flex items-end">
        <Image
          src={"/images/imageFull.png"}
          alt="picture of fruits"
          height={0}
          width={0}
          quality={100}
          sizes="100vw"
          style={{
            height: "100%",
            width: "100%",
            backgroundPosition: "cover",
          }}
        />
      </div>
      <div className="w-full px-4 pb-2">
        <Link href={"/login"}>
          <button
            type="button"
            className="rounded-lg text-white w-full font-semibold p-2 mt-12 bg-[#1F8F2A]"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
