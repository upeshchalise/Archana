import React from "react";
import img from "../../public/images/pngwing_2.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center gap-3 w-[216px]  mt-9">
      <Image src={img} alt="This is the logo" height={61} width={65} />
      <div className="font-customSans text-center italic text-green-700 pt-4 ">
        <h2 className=" font-bold ">Archana</h2>
        <span className="text-xs">International Grocery</span>
      </div>
    </div>
  );
};

export default Logo;
