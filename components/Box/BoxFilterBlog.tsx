"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const BoxFilterBlog = () => {
  const searchParams = useSearchParams();
  const tags = searchParams.get("tags");

  return (
    <div className="col-span-1">
      <div className="p-8 bg-slate-200 rounded-md ">
        <h2 className="text-gray-900 font-bold">Blog About</h2>
        <div className=" bg-slate-500 w-full p-2">
          <p className="text-white">{tags}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxFilterBlog;
