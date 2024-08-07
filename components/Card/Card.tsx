import React, { Suspense } from "react";
import TagSearching from "../Tags/TagSearching";
import { SIZE } from "@/types/common";
import Image from "next/image";
import { Blog } from "@/types/blog";
import moment from "moment";
import Link from "next/link";

const MOCK_TAGS_SEARCH: string[] = ["Python", "Java", "Spring Boot", "Golang"];

type CardProps = {
  blog: Blog;
};

const Card = ({ blog }: CardProps) => {
  const { title, abstract, date, imageURL, tags } = blog;

  return (
    <div>
      <div className=" grid grid-cols-6 gap-8">
        {/* title-blog */}
        <div className="col-span-4 flex flex-col gap-4">
          <div>
            <div className=" flex justify-between">
              <h1 className=" font-bold text-xl">{title}</h1>
              <Link href={"details"}>read more...</Link>
            </div>
            <p>{moment(date).format("LL")}</p>
          </div>
          <p>{abstract}</p>

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

        {/* image-preview  */}
        <div className="col-span-2 px-8">
          <Image
            src={imageURL}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
