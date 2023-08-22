import React from "react";
import Image from "next/image";
import img from "../../public/images/archana.png";

const ButtomLogo = () => {
  return (
    <footer className="fixed bottom-0 ">
      <Image src={img} alt="footer of the archana" />
    </footer>
  );
};

export default ButtomLogo;
