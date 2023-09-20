import React from "react";
import Image from "next/image";

const AdSection = () => {
  return (
    <div className="bg-Green h-[10.375rem] w-full rounded-md mt-2 flex justify-evenly p-3 mb-3">
      <p className="w-[8rem] text-sm font-bold text-white">
        Save 20% <br />
        off on all the fruits
      </p>
      <Image
        src="/images/pngwing_3.png"
        alt="Picture of the fruits"
        width={161}
        height={107}
      />
    </div>
  );
};

export default AdSection;
