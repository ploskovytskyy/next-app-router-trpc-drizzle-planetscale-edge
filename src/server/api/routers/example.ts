import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { createNoteSchema } from "~/app/dashboard/create-note";
import { editNoteSchema } from "~/app/dashboard/edit-note";
import { slugify } from "~/lib/utils";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { notes } from "~/server/db/schema";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getCurrentUserNotes: protectedProcedure.query(({ ctx: { auth, db } }) => {
    const data = db
      .select()
      .from(notes)
      .where(eq(notes.user_id, auth.userId))
      .orderBy(desc(notes.created_at));
    return data;
  }),
  createNote: protectedProcedure
    .input(createNoteSchema)
    .mutation(async ({ input, ctx: { auth, db } }) => {
      const result = await db.insert(notes).values({
        user_id: auth.userId,
        title: input.title,
        text: input.text,
        slug: slugify(input.title),
      });
      return result;
    }),
  deleteNote: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input, ctx: { db } }) => {
      const result = await db.delete(notes).where(eq(notes.id, input.id));
      return result;
    }),
  editNote: protectedProcedure
    .input(editNoteSchema)
    .mutation(async ({ input, ctx: { db } }) => {
      const result = await db
        .update(notes)
        .set({
          title: input.title,
          text: input.text,
        })
        .where(eq(notes.id, input.id));
      return result;
    }),
});
