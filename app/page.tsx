import TagSearching from "@/components/Tags/TagSearching";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import { Suspense } from "react";

const MOCK_TAGS_SEARCH: string[] = ["Python", "Java", "Spring Boot", "Golang"];

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
      <h1 className=" text-5xl font-bold">Best Blogging Platforms</h1>
      <div className="text-center">
        <p>Discover and compare the best blogging platforms and sites.</p>
        <p>
          Our curated list provides in-depth reviews, helping you make an
          informed decision
        </p>
      </div>
      <p>Search blog platforms by features</p>
      <div className="my-8">
        <hr className="w-full" />
      </div>

      <div className="flex flex-col gap-4 w-3/4">
        <button className="flex gap-4 justify-end items-center">
          <p className=" font-bold">Click All Blog</p>
          <ArrowRightOutlined />
        </button>

        {/* TODO: // list-all-tags-generation */}
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          <Suspense fallback={<p>these tags is Loading</p>}>
            {MOCK_TAGS_SEARCH.map((tag, index) => {
              return <TagSearching key={index} tagName={tag} />;
            })}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
