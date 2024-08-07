import { Blog } from "@/types/blog";

export const MOCK_BLOGS: Blog[] = [
  {
    title: "Understanding Microservices",
    abstract: "An overview of microservices architecture and its benefits.",
    content:
      "Microservices architecture is a method of developing software systems that tries to focus on building single-function modules with well-defined interfaces and operations. This approach is in contrast to the monolithic structure, where everything is built as a single unit.",
    date: new Date("2024-01-01"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",
    tags: ["Microservices", "Architecture", "Software Development"],
  },
  {
    title: "Getting Started with Spring Boot",
    abstract:
      "A guide to help you start developing applications with Spring Boot.",
    content:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can 'just run'. We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.",
    date: new Date("2024-02-15"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",

    tags: ["Spring Boot", "Java"],
  },
  {
    title: "Top 10 Blogging Platforms in 2024",
    abstract: "Discover the best blogging platforms available in 2024.",
    content:
      "In this article, we review and compare the top 10 blogging platforms that you can use in 2024. Whether you are a beginner or an experienced blogger, this list will help you choose the right platform for your needs.",
    date: new Date("2024-03-20"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",

    tags: ["Blogging", "Platforms", "Review"],
  },
  {
    title: "Top 10 Blogging Platforms in 2024",
    abstract: "Discover the best blogging platforms available in 2024.",
    content:
      "In this article, we review and compare the top 10 blogging platforms that you can use in 2024. Whether you are a beginner or an experienced blogger, this list will help you choose the right platform for your needs.",
    date: new Date("2024-03-20"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",

    tags: ["Blogging", "Platforms", "Review"],
  },
  {
    title: "Top 10 Blogging Platforms in 2024",
    abstract: "Discover the best blogging platforms available in 2024.",
    content:
      "In this article, we review and compare the top 10 blogging platforms that you can use in 2024. Whether you are a beginner or an experienced blogger, this list will help you choose the right platform for your needs.",
    date: new Date("2024-03-20"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",

    tags: ["Blogging", "Platforms", "Review"],
  },
  {
    title: "Top 10 Blogging Platforms in 2024",
    abstract: "Discover the best blogging platforms available in 2024.",
    content:
      "In this article, we review and compare the top 10 blogging platforms that you can use in 2024. Whether you are a beginner or an experienced blogger, this list will help you choose the right platform for your needs.",
    date: new Date("2024-03-20"),
    imageURL:
      "https://media.istockphoto.com/id/1276936276/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A.jpg?s=1024x1024&w=is&k=20&c=ciLvkGtBaNlX4ypW6IsxIVqoHU1oGR2vYQ9Sgg3Iss0=",

    tags: ["Blogging", "Platforms", "Review"],
  },
];
