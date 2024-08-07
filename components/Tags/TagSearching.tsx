import { SIZE } from "@/types/common";
import Link from "next/link";
import React from "react";

type TagSearchingProps = {
  tagName: string;
  size: SIZE;
};

const TagSearching = ({ tagName, size }: TagSearchingProps) => {
  return (
    <Link
      href={"/blog"}
      className={`border-2 border-gray-400 w-full 
        flex justify-center align-middle items-center
         hover:bg-slate-400 hover:text-gray-700
         ${size === SIZE.SMALL && "h-8"}
         ${size === SIZE.MEDIUM && "h-16"}
         ${size === SIZE.LARGE && "h-16"}
    `}
    >
      <p>{tagName}</p>
    </Link>
  );
};

export default TagSearching;
