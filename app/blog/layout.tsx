import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-32 grid grid-cols-4 gap-8 mt-16">
      <div className="col-span-3">{children}</div>
      <div className="bg-slate-300 col-span-1 px-8 rounded-md">
        <div className="py-8 ">
          <h2 className=" text-gray-900 font-bold">Get Start Blog</h2>
        </div>
      </div>
    </div>
  );
};

export default Layout;
