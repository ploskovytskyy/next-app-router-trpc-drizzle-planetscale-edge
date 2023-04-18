import Link from "next/link";
import FeatureCard from "~/components/feature-card";
import { Code, H2, H4, Large, Lead, P } from "~/components/typography";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { api } from "~/lib/api/server";
import { cn } from "~/lib/utils";

import HelloFromClient from "./hello-from-client";

export default async function Page() {
  const { greeting } = await api.example.hello.fetch({
    text: "Test RSC TRPC Call",
  });

  return (
    <>
      <section className="grid gap-4 text-center py-16 border-b bg-gradient-to-r from-rose-100 to-teal-100">
        <h1 className="text-6xl font-black">Giga Stack ✨</h1>
        <Large>{`The most Twitter influenced stack you've ever seen`}</Large>
        <div className="flex gap-5 justify-center">
          <Link href="/dashboard" className={cn(buttonVariants())}>
            Dashboard
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "subtle" }))}
          >
            GitHub
          </a>
        </div>
      </section>
      <section className="container py-10">
        <H2 className="mb-5">Features</H2>
        <p className="max-w-2xl mb-6">
          Inspired by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-rose-400 underline"
            href="https://create.t3.gg/"
          >
            T3 stack
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-rose-400 underline"
            href="https://tx.shadcn.com/"
          >
            Shadcn Taxonomy
          </a>{" "}
          project, I created this example of experimental edge stack full of
          sweet and fancy features for you to play with. Shout out to a bunch of
          open source solutions on the GitHub which I combined here.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FeatureCard
            href="https://nextjs.org/"
            title="Next.js"
            description="Next.js 13 with App Directory, edge runtime. React server components"
          />
          <FeatureCard
            href="https://trpc.io/"
            title="tRPC"
            description="End-to-end typesafe APIs. Best DX for writing full-stack with Next.js (and more)"
          />
          <FeatureCard
            href="https://clerk.com/"
            title="Clerk (Auth)"
            description="User Management, authentication, very nice API, security"
          />
          <FeatureCard
            href="https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/mysql-core/README.md"
            title="Drizzle ORM"
            description={`"If you know SQL, you know Drizzle ORM", TypeScript, db push with drizzle-kit`}
          />
          <FeatureCard
            href="https://planetscale.com/"
            title="PlanetScale"
            description="MySQL, branching, JS Serverless Driver "
          />
          <FeatureCard
            href="https://ui.shadcn.com/"
            title="Shadcn/ui"
            description="UI components built using Radix UI and styled with Tailwind CSS."
          />
        </div>
      </section>
      <section className="container py-10">
        <H2 className="mb-5">Fetching</H2>
        <P className="mb-10">
          In this implementation you have <strong>2 API clients</strong>. One
          for <Code>RSC</Code> and one for <Code>Client components</Code>.
          Syntax for both are the same, with all typescript hinting features.
        </P>
        <div className="mb-10">
          <H4 className="mb-4">To make a RSC api call:</H4>
          <pre className="bg-slate-50 rounded mb-5">
            {`
  import { api } from "~/lib/api/server";
  
  export default async function ServerComponent() {
    const data = await api.route.stuff.fetch();
  }
              `}
          </pre>
          Example (watch the code):
          <div className="flex p-1 border rounded mt-2">
            <Lead>{greeting}</Lead>
          </div>
        </div>
        <div className="mb-10">
          <H4 className="mb-4">To make a Client api call:</H4>
          <pre className="bg-slate-50 rounded mb-5">
            {`
  "use client";

  import { api } from "~/lib/api/client";
  
  export default function ClientComponent() {
    const { data, isLoading } = await api.route.stuff.useQuery();
  }
              `}
          </pre>
          Example (watch the code):
          <div className="flex p-1 border rounded mt-2">
            <Lead>
              <HelloFromClient />
            </Lead>
          </div>
        </div>
        <div className="mb-10">
          <H4 className="mb-2">Mutation:</H4>
          <p className="mb-4">
            The idea is simple - mutate on client and refresh the route on
            success
          </p>
          <pre className="bg-slate-50 rounded mb-5">
            {`
  const router = useRouter();

  const { mutate, isLoading } = api.route.stuff.useMutation({
    onSuccess() {
      router.refresh();
    },
  });
              `}
          </pre>
        </div>
        <H2 className="mb-6">
          Play with demo dashboard or
          <br />
          see project code on GitHub
        </H2>
        <div className="flex gap-5">
          <Link href="/dashboard" className={cn(buttonVariants())}>
            Dashboard
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "subtle" }))}
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
