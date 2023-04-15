import { UserButton } from "@clerk/nextjs/app-beta";
import { H1, Lead } from "~/components/typography";
import { api } from "~/lib/api/server";

export default async function Page() {
  const { greeting } = await api.example.helloProtected.fetch();
  return (
    <div className="container py-12">
      <H1 className="mb-5 flex items-center justify-between">
        Dashboard
        <UserButton afterSignOutUrl="/" />
      </H1>
      <Lead>{greeting}</Lead>
    </div>
  );
}
