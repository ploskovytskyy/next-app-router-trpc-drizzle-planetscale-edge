import { H2, H3 } from "~/components/typography";
import { api } from "~/lib/api/server";

import CreateNote from "./create-note";
import NoteCard from "./note-card";

export default async function Page() {
  const notes = await api.example.getCurrentUserNotes.fetch();
  return (
    <>
      <H2 className="mb-5 flex items-center justify-between">
        My notes
        <CreateNote />
      </H2>
      {!notes.length && (
        <div className="grid gap-3 items-center justify-items-center px-6 py-16 border rounded">
          <H3>Create my first note</H3>
          <CreateNote />
        </div>
      )}
      <div className="grid gap-4 pb-10">
        {notes.map(({ id, title, text }) => (
          <NoteCard key={id} id={id} title={title} text={text} />
        ))}
      </div>
    </>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
