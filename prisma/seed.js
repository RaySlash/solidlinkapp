import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const role = await prisma.role.createMany({
    data: [
      {
        name: "admin",
      },
      {
        name: "user",
      },
    ],
  });

  const user = await prisma.user.createMany({
    data: [
      {
        username: "example",
        passwordHash: "password",
        name: "Alice",
        roleId: 2,
      },
      {
        username: "example2",
        passwordHash: "password",
        name: "Bob",
        roleId: 1,
      },
      {
        username: "example3",
        passwordHash: "password",
        name: "Charlie",
        roleId: 1,
      },
      {
        username: "example4",
        passwordHash: "password",
        name: "David",
        roleId: 1,
      },
    ],
  });

  const post = await prisma.post.createMany({
    data: [
      {
        title: "Hello World",
        description: "This is a test post",
        published: true,
        authorId: 1,
        image: "https://source.unsplash.com/random",
        createdAt: new Date(),
      },
      {
        title: "Hello World 2",
        description: "This is a test post",
        published: true,
        authorId: 1,
        image: "https://source.unsplash.com/random",
        createdAt: new Date(),
      },
      {
        title: "Hello World 3",
        description: "This is a third test post",
        published: false,
        authorId: 2,
        image: "https://source.unsplash.com/random",
        createdAt: new Date(),
      },
    ],
  });

  const like = await prisma.like.createMany({
    data: [
      {
        userId: 1,
        postId: 2,
      },
      {
        userId: 2,
        postId: 1,
      },
    ],
  });

  const comment = await prisma.comment.createMany({
    data: [
      {
        content: "Nice post",
        authorId: 1,
        postId: 2,
        createdAt: new Date(),
      },
      {
        content: "Looks good",
        authorId: 1,
        postId: 2,
        createdAt: new Date(),
      },
    ],
  });
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
