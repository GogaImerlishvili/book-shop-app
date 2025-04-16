import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="flex flex-col-reverse itemc-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-white md:text-7xl">
          {title}
        </h1>
        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-amber-100">
          <p>
            By 
            <span className="font-semibold text-amber-200 mx-1.5">
              {author}
            </span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-amber-200 mx-1.5">{genre}</span>
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <Image src="/icons/star.svg" alt="star" width={22} height={22} />
          <p className="text-amber-200">{rating}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-4 mt-1">
          <p>
            Total Books: <span>{total_copies}</span>
          </p>
          <p>
            Available Bookss: <span>{available_copies}</span>
          </p>
        </div>
        <p className="mt-2 text-justify text-xl text-amber-200 max-w-[40rem]">
          {description}
        </p>
        <Button className="mt-4 min-h-14  bg-amber-400 text-amber-100  hover:bg-amber-500 w-[40rem] cursor-pointer">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-serif text-xl text-dark-100">Borrow Book</p>
        </Button>
      </div>
    <div className="relative flex flex-1 justify-centner">
      <div className="relative">
        <BookCover variant="wide" 
        className="z-10" coverColor={color} coverImage={cover}
        />
        <div className="absoulte left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
        <BookCover variant="wide" 
         coverColor={color} coverImage={cover}
        />
        </div>
      </div>
    </div>

    </section>
  );
};

export default BookOverview;
