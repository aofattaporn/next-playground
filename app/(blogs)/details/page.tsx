import { MOCK_BLOGS } from "@/mock/blog";
import { Blog } from "@/types/blog";
import React, { Suspense } from "react";
import Image from "next/image";
import moment from "moment";
import TagSearching from "@/components/Tags/TagSearching";
import { SIZE } from "@/types/common";

type PageProps = {
  blog: Blog;
};

const Page = () => {
  const { title, abstract, content, date, tags, imageURL } = MOCK_BLOGS[0];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p>{moment(date).format("LL")}</p>
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          <Suspense fallback={<p>these tags is Loading</p>}>
            {tags.map((tag, index) => {
              return (
                <TagSearching size={SIZE.SMALL} key={index} tagName={tag} />
              );
            })}
          </Suspense>
        </div>
      </div>
      <div className="my-2">
        <hr className="w-full" />
      </div>
      <Image src={imageURL} alt={title} width={500} height={200} />

      <div>
        <p>{abstract}</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Page;
