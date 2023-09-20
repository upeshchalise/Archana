import React from "react";
import Image from "next/image";

interface ItemsProps {
  desc: string;
  img: string;
  price: string;
  discountImg?: string;
}

const Items = ({ desc, img, price, discountImg }: ItemsProps) => {
  return (
    <>
      <div className="w-[5.438rem] text-center text-xs font-medium relative">
        <Image src={img} alt="desc" width={87} height={96} />
        {discountImg && (
          <Image
            src={discountImg}
            alt="discount Immg"
            width={28}
            height={28}
            className="absolute top-0 right-0"
          />
        )}

        <p>{desc}</p>
        <p className="text-customColor tracking-wide">Rs. {price}</p>
      </div>
    </>
  );
};

export default Items;
