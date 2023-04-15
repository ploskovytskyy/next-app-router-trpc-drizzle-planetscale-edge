"use client";

import { ClerkProvider } from "@clerk/nextjs/app-beta/client";
import { env } from "~/env.mjs";

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
