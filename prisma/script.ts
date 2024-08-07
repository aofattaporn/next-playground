import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const blog = await prisma.blog.create({
    data: {
      title: "A",
      abstract: "abstract",
      content: "content",
      imageURL: "",
    },
  });
  console.log(blog);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
