import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book_cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      BOOK SIDE SVG
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image src={coverUrl} alt="Book Cover" fill className="rounded-sm object-fill" />
      </div>
    </div>
  );
};

export default BookCover;
