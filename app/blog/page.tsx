import Card from "@/components/Card/Card";
import { MOCK_BLOGS } from "@/mock/blog";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* card-blog */}
      {MOCK_BLOGS.map((blog, index) => {
        return <Card key={index} blog={blog} />;
      })}
    </div>
  );
};

export default Page;
