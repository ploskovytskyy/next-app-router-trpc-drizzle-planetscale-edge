import { cn } from "~/lib/utils";

export function H1({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function Lead({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <p className={cn("text-xl text-slate-700 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}

export function Large({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <div
      className={cn(
        "text-lg font-semibold text-slate-900 dark:text-slate-50",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Small({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

export function Subtle({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}
