import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  showScrollIndicators?: boolean;
  scrollbarClassName?: string;
}

const ScrollableContent = React.forwardRef<HTMLDivElement, ScrollableContentProps>(
  ({ 
    children, 
    className, 
    title, 
    description, 
    showScrollIndicators = true,
    scrollbarClassName,
    ...props 
  }, ref) => {
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(false);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const checkScroll = React.useCallback(() => {
      if (contentRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }, []);

    React.useEffect(() => {
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => window.removeEventListener("resize", checkScroll);
    }, [checkScroll]);

    const scrollLeft = () => {
      if (contentRef.current) {
        contentRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      if (contentRef.current) {
        contentRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    };

    return (
      <div className={cn("relative", className)} {...props} ref={ref}>
        {title && (
          <div className="mb-4">
            <h3 className="text-xl font-medium">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className="relative group">
          {showScrollIndicators && canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-border hidden md:flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <ScrollArea 
            className="w-full overflow-x-auto pb-4"
            orientation="horizontal"
            onScroll={checkScroll}
            scrollbarClassName={scrollbarClassName}
          >
            <div 
              ref={contentRef} 
              className="inline-flex space-x-4 px-4 min-w-full w-max"
            >
              {children}
            </div>
          </ScrollArea>

          {showScrollIndicators && canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-border hidden md:flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Mobile scroll indicators */}
          {showScrollIndicators && (
            <div className="flex items-center justify-center gap-1 mt-2 md:hidden">
              <div 
                className={cn(
                  "h-1.5 w-8 rounded-full transition-colors", 
                  canScrollLeft ? "bg-primary/70" : "bg-muted"
                )}
              />
              <div 
                className={cn(
                  "h-1.5 w-8 rounded-full transition-colors", 
                  canScrollRight ? "bg-primary/70" : "bg-muted"
                )}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

ScrollableContent.displayName = "ScrollableContent";

export { ScrollableContent };