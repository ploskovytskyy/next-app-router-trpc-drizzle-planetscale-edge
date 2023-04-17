import { UserButton } from "@clerk/nextjs/app-beta";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <div className="mb-5 flex items-center justify-between py-4 border-b">
        <span className="font-bold text-2xl">Protected route</span>
        <UserButton afterSignOutUrl="/" />
      </div>
      {children}
    </div>
  );
}
