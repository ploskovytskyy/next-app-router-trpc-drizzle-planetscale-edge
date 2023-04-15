"use client";

import { api } from "~/lib/api/client";

export default function HelloFromClient() {
  const { data, isLoading } = api.example.hello.useQuery({
    text: "Test Client TRPC Call",
  });

  if (isLoading) return <>Loading...</>;
  if (!data) return <>Error</>;

  return <>{data.greeting}</>;
}
