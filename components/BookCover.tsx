import React from "react";

interface Props {
  className?: string;
  variant: "wide" | "smaill";
  coverColor: string;
  coverImage: string;
}

const BookCover = ({ className, variant, coverColor, coverImage }: Props) => {
  return <div>BookCover Letter</div>;
};

export default BookCover;
