import { cn } from "@/lib/utils";

export default function button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "rounded-md font-medium transition-colors",
        variant === "default" &&
          "bg-black text-white hover:bg-gray-800 px-4 py-2",
        variant === "outline" &&
          "border bg-transparent hover:bg-gray-100 px-4 py-2",
        className
      )}
      {...props}
    />
  );
}
