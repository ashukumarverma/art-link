import React from "react";
import ArtCard from "@/components/art/artCard";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-800 font-extrabold">Gallery</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 items-center">
        <ArtCard title="art" imageURL="/img/logo.jpeg" />
        <ArtCard title="art" imageURL="/img/logo.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/login.jpeg" />
        <ArtCard title="art" imageURL="/img/login.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
        <ArtCard title="art" imageURL="/img/register.jpeg" />
      </div>
    </div>
  );
};

export default Gallery;
