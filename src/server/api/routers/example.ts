import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  helloProtected: protectedProcedure.query(async ({ ctx: { auth } }) => {
    const user = await clerkClient.users.getUser(auth.userId);
    return {
      greeting: `Hello ${user.firstName || ""} ${user.lastName || ""}`,
    };
  }),
});
