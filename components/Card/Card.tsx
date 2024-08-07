import React, { Suspense } from "react";
import TagSearching from "../Tags/TagSearching";
import { SIZE } from "@/types/common";
import Image from "next/image";

const MOCK_TAGS_SEARCH: string[] = ["Python", "Java", "Spring Boot", "Golang"];

const Card = () => {
  return (
    <div>
      <div className=" grid grid-cols-6 gap-8">
        {/* title-blog */}
        <div className="col-span-4 flex flex-col gap-4">
          <div>
            <h1 className=" font-bold text-xl">สวัสดี FastHTML</h1>
            <p>August 5, 2024</p>
          </div>
          <p>
            สรุปจากการแบ่งปันเรื่อง Automated testing with Cypress เป็นเวลา 2
            วันเป็นการเขียน test script ด้วย Cypress เป็นภาษา
            JavaScriptโดยสิ่งที่แบ่งปันเป็นดังนี้
          </p>

          <div className="grid grid-cols-4 grid-flow-row gap-4">
            <Suspense fallback={<p>these tags is Loading</p>}>
              {MOCK_TAGS_SEARCH.map((tag, index) => {
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
            src="https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0="
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
