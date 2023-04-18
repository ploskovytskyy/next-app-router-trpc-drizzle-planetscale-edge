import Link from "next/link";
import { UserButton } from "@clerk/nextjs/app-beta";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <div className="mb-5 flex items-center justify-between py-4 border-b">
        <span className="font-bold text-2xl">Dashboard</span>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-rose-400 underline font-semibold">
            Home page
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      {children}
    </div>
  );
}
