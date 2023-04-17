import { H1, H2, Lead } from "~/components/typography";
import { api } from "~/lib/api/server";

import HelloFromClient from "./hello-from-client";

export default async function Page() {
  const { greeting } = await api.example.hello.fetch({
    text: "Test RSC TRPC Call",
  });

  return (
    <div className="container py-12">
      <H1>Demo Page</H1>
      <H2 className="mb-5">From RSC Call</H2>
      <Lead>{greeting}</Lead>
      <H2 className="mb-5">From Client Call</H2>
      <Lead>
        <HelloFromClient />
      </Lead>
    </div>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
