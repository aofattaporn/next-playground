import Link from "next/link";
import React from "react";

type TagSearchingProps = {
  tagName: string;
};

const TagSearching = ({ tagName }: TagSearchingProps) => {
  return (
    <Link
      href={"/blog"}
      className="border-2 border-gray-400 w-full h-16 flex justify-center align-middle items-center
         hover:bg-slate-400 hover:text-gray-700
    "
    >
      <p>{tagName}</p>
    </Link>
  );
};

export default TagSearching;
