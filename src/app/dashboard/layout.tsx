import Link from "next/link";
import { UserButton } from "@clerk/nextjs/app-beta";
import { Home } from "lucide-react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <div className="mb-5 flex items-center justify-between py-4 border-b dark:border-b-stone-700">
        <span className="font-bold text-2xl">Dashboard</span>
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="hover:text-rose-400 underline font-semibold"
          >
            <Home />
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      {children}
    </div>
  );
}
