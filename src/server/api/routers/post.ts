import { getPosts } from "~/lib/post";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return getPosts();
  }),
});
