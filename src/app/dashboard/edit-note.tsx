"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/lib/api/client";

export const editNoteSchema = z.object({
  id: z.number(),
  title: z.string().min(1).optional(),
  text: z.string().optional().nullable(),
});

type EditNoteSchema = z.infer<typeof editNoteSchema>;

export default function EditNote({ id, title, text }: EditNoteSchema) {
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<EditNoteSchema>({
    resolver: zodResolver(editNoteSchema),
    defaultValues: {
      id,
      title,
      text,
    },
  });

  const router = useRouter();

  const { mutate: editNote, isLoading } = api.example.editNote.useMutation({
    onSuccess(_, newData) {
      setOpen(false);
      reset(newData);
      router.refresh();
    },
  });

  const handleCreate = (data: EditNoteSchema) => {
    editNote(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <form onSubmit={handleSubmit(handleCreate)}>
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
            <DialogDescription>
              {`Edit your note and click save when you're done.`}
            </DialogDescription>
          </DialogHeader>
          <div
            className="grid gap-4 py-4"
            onSubmit={handleSubmit(handleCreate)}
          >
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="text">Note</Label>
              <Textarea
                id="text"
                {...register("text")}
                className="min-h-[300px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              Save changes
              {isLoading && <Loader2 className="animate-spin ml-2 w-4" />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
