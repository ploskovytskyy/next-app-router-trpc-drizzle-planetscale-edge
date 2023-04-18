import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:bg-stone-800 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800",
  {
    variants: {
      variant: {
        default:
          "bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-600",
        destructive:
          "bg-white dark:bg-stone-900 border border-red-600 text-red-600 dark:text-white hover:text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-stone-200 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100",
        subtle:
          "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-100",
        ghost:
          "bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 dark:text-stone-100 dark:hover:text-stone-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-stone-900 dark:text-stone-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, loadingText, children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading && loadingText ? loadingText : children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
