import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  imageURL: string;
}

const ArtCard = ({ title, imageURL }: Props) => {
  return (
    <div
        className="relative
       before:absolute
       before:h-full before:w-full
       before:rounded-xl
       before:z-10
       hover:before:bg-gray-600
       before:opacity-50
       cursor-pointer
       "
    >
      <Image
        src={imageURL}
        alt={title}
        width={500}
        height={500}
        className="rounded-xl cursor-pointer relative z-0 aspect-square w-full border-2"
      />
    </div>
  );
};

export default ArtCard;
