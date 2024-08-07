import Card from "@/components/Card/Card";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* card-blog */}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Page;
