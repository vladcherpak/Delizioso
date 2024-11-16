import React from "react";
import logo from "@/static/icons/Logo-head.svg";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} width={132} height={51} alt="logo" />
    </Link>
  );
};

export default Logo;
