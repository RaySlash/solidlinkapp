import { Elysia } from "elysia";
import { prisma } from "../client";

export const posts = new Elysia()
  .get("/posts", async () => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          published: true,
        },
        include: {
          Comment: true,
          author: {
            select: {
              name: true,
            },
          },
        },
      });
      return posts;
    } catch (error) {
      return `Error occured while fetching posts \n ${error}`;
    }
  })
  .post("/posts", async () => {
    // create a new post
    return { message: "Post created" };
  })
  .post("/posts/:id/like", async () => {
    // like a post
    return { message: "Post liked" };
  })
  .post("/posts/:id/comment", async () => {
    // comment on a post
    return { message: "Comment added" };
  });
