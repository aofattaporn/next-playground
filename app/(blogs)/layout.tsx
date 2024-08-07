import TagSearching from "@/components/Tags/TagSearching";
import { SIZE } from "@/types/common";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-64 grid grid-cols-4 gap-8 mt-16">
      <div className="col-span-3">{children}</div>
      {/* <BoxFilterBlog /> */}

      <div className="flex flex-col gap-16 text-white">
        <div className="flex flex-col gap-4">
          <h3 className=" font-bold text-xl">Blog About</h3>
          <TagSearching tagName={"sss"} size={SIZE.SMALL} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">New Updated</h3>
          <div>
            <p>Understanding Microservices</p>
            <p>Getting Started with Spring Boot</p>
            <p>Top 10 Blogging Platforms in 2024</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">All Tags</h3>
          <div>
            <p>Understanding Microservices</p>
            <p>Getting Started with Spring Boot</p>
            <p>Top 10 Blogging Platforms in 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
