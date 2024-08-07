import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Link href={"/"} className="navbar bg-base-100 px-64">
      <div className="text-xl">Blog Platform</div>
    </Link>
  );
};

export default Navbar;
