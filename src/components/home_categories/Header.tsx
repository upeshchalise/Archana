import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-5">
        {/* SmallLogo */}
        <Link href="/home">
          <div className="flex justify-start w-[7.313rem]">
            <Image
              src="/images/pngwing_2.png"
              alt="image of the site logo"
              width={40}
              height={40}
            />
            <div className="font-customSans text-center italic text-green-700 flex flex-col mt-2">
              <h2 className=" font-bold text-xs">Archana</h2>
              <span className="text-xsmall">International Grocery</span>
            </div>
          </div>
        </Link>

        {/* Header Icon */}

        <div className="flex h-[18px] mt-2 gap-4">
          <Link href="/notification">
            <Image
              src="/images/bell.png"
              alt="bell picture"
              width={18}
              height={18}
            />
          </Link>
          <Link href="/cart">
            <Image
              src="/images/dustbin.png"
              alt="bell picture"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
