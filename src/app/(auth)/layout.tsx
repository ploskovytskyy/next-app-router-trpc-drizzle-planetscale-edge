export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container min-h-screen grid place-content-center">
      {children}
    </div>
  );
}
