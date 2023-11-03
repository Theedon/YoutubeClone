"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import categories from "@/data/categories";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TRANSLATE_AMOUNT = 100;

function CategoryPills() {
  const [translate, setTranslate] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;

      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth,
      );
    });

    observer.observe(containerRef.current);
  }, [categories, translate]);

  return (
    <div className="relative overflow-x-hidden " ref={containerRef}>
      <div
        className="flex w-[max-content] gap-3 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category, id) => (
          <Button
            variant={selectedCategory === category ? "dark" : "default"}
            key={id}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className="whitespace-nowrap rounded-lg"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 h-full w-24 -translate-y-1/2 bg-gradient-to-r  from-white from-50% to-transparent">
          <Button
            variant="ghost"
            className="aspect-square h-full w-auto p-1.5"
            size="icon"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (translate <= 0) {
                  return 0;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 flex h-full w-24 -translate-y-1/2 justify-end bg-gradient-to-l from-white from-50% to-transparent">
          <Button
            variant="ghost"
            className="h-full w-auto p-1.5"
            size="icon"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current === null) return translate;
                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CategoryPills;
