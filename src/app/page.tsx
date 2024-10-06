import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export default function Home() {
  return (
      <div
          className="relative [perspective:500px] flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
          <GridPattern
              className={cn(
                  "[mask-image:radial-gradient(500px_circle_at_center,#ffffff60,transparent)]",
                  "[transform-style:preserve-3d] [transform:rotateX(45deg)]",
                  "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
              )}
          />
      </div>
  );
}
