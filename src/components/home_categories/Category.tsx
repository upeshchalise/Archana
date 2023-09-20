import React from "react";
import Image from "next/image";

interface CategoryProps {
  image: string;
  category: string;
}

const Category = ({ image, category }: CategoryProps) => {
  return (
    <>
      <div className="w-[5.625rem] h-[6.25rem] flex flex-col justify-center items-center gap-1">
        <Image
          src={image}
          alt="image of the category product"
          width={37}
          height={37}
        />
        <p className="text-small font-medium ">{category}</p>
      </div>
    </>
  );
};

export default Category;
