import React from "react";
import ArtCard from "@/components/art/artCard";

const artData = [
  {
    title: "art",
    imageURL:
      "https://instagram.fpat2-4.fna.fbcdn.net/v/t51.29350-15/449335499_876186174321684_4453971110098583231_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fpat2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-QN3a953A6YQ7kNvgHmHHF1&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzQwMTA3MDg5NTE0ODQ3ODc2MQ%3D%3D.2-ccb7-5&oh=00_AYA9Q1ADSNfhv0A0jwJXisazm664LzaKCvLQG_ugZL3TKg&oe=668ADAB4&_nc_sid=8f1549",
    ratio: "portrait",
    artist: "Kuber",
  },
  {
    title: "art",
    imageURL:
      "https://cdna.artstation.com/p/assets/images/images/066/381/460/large/jeeva-artist-f4mno7qaeaaznwi.jpg?1692767040",
    ratio: "portrait",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL: "/img/logo.jpeg",
    ratio: "square",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL: "https://kalakarstudio.in/wp-content/uploads/2022/08/final2.jpeg",
    ratio: "square",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL: "/img/artEye.png",
    ratio: "landscape",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://instagram.fpat2-4.fna.fbcdn.net/v/t51.29350-15/277406972_932479847430780_5713732080138351171_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fpat2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=O9z_a41PweAQ7kNvgG1lYdm&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MjgwMzMxNzI0MDIyNzcwODMyNA%3D%3D.2-ccb7-5&oh=00_AYAK6nB6fOpOheyTbIGUN4G-xcXimJ7aA8DA8hhlxt21CA&oe=668B4CB0&_nc_sid=0b30b7",
    ratio: "square",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL: "https://img6.arthub.ai/64bd3aa9-b195.webp",
    ratio: "square",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://e1.pxfuel.com/desktop-wallpaper/570/172/desktop-wallpaper-iron-man-worksheet-minnion-iron-man-sketch.jpg",
    ratio: "portrait",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://m.media-amazon.com/images/I/71C8m0K7LsL._AC_UF1000,1000_QL80_.jpg",
    ratio: "portrait",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://static.vecteezy.com/system/resources/thumbnails/007/446/043/small_2x/camping-in-nature-mountain-landscape-sketch-style-illustrations-vector.jpg",
    ratio: "landscape",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://instagram.fpat2-3.fna.fbcdn.net/v/t51.29350-15/348258009_527959269369503_4043111816852907375_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2OTIuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fpat2-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=OWkCWF1ZUX0Q7kNvgEgiqwn&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzEwODA4MTUzMDI4NjQwNjM4Mw%3D%3D.2-ccb7-5&oh=00_AYD9lrubp2a3vyyhqc_onxjuU_FxRdN7q4sPzOLItm7gvQ&oe=668AFE03&_nc_sid=8f1549",
    ratio: "portrait",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL: "/img/artYellow.png",
    ratio: "landscape",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://instagram.fpat2-1.fna.fbcdn.net/v/t51.29350-15/304853628_1652786531781686_4907103564604972154_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fpat2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uUd8oOZ0_2MQ7kNvgGKpFrr&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MjkxOTc4NTUxOTUyNjE2ODQ4MA%3D%3D.2-ccb7-5&oh=00_AYC1qcbRnOOC_EN8dmy8XQNKjRTlehqQYfO2V9D7jEoSNQ&oe=668B4DC6&_nc_sid=0b30b7",
    ratio: "landscape",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL: "/img/artEye.png",
    ratio: "landscape",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfwSbLRp5QWzeIwP3chD72mAwbhfZ9wUTw&s",
    ratio: "portrait",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL: "/img/login.jpeg",
    ratio: "square",
    artist: "Artist",
  },
  {
    title: "art",
    imageURL:
      "https://scontent.cdninstagram.com/v/t51.29350-15/309469355_154275657071363_1576016343352287926_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=9fBeH86z4DAQ7kNvgGdYs3H&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjkzNzA3MDEzMjk1NDcyMTQ1Mw%3D%3D.2-ccb7-5&oh=00_AYB6Z5Uk_1Fu-huBjbk7nUdF7Q6Ygqaqy2pAE1j0HUmRsw&oe=668B6CB4&_nc_sid=10d13b",
    ratio: "square",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL:
      "https://scontent.cdninstagram.com/v/t51.29350-15/409726386_182689278203203_5438135329010955896_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=SvaBXStxsG0Q7kNvgGfy6J3&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1NjYxMDYzNzc5NzQ5NjM2MQ%3D%3D.2-ccb7-5&oh=00_AYB8TLu9NCfhTDx6kuSls6PQlf14oPYeN0ZiuuJRrrNNeA&oe=668AEC41&_nc_sid=10d13b",
    ratio: "portrait",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL:
      "https://instagram.fpat2-2.fna.fbcdn.net/v/t51.29350-15/286127326_1021046591879026_8628488992768740112_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fpat2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=OlX35_gmLLEQ7kNvgGQwkh6&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=Mjg1Mzk4MjEyMjQ0NDk2OTQ4OA%3D%3D.2-ccb7-5&oh=00_AYBoFmvcoAhtPsXzDUKuvk28hVQrFvPJL8sYdnDod1eV6g&oe=668B507A&_nc_sid=0b30b7",
    ratio: "square",
    artist: "Ashutosh",
  },
  {
    title: "art",
    imageURL: "/img/register.jpeg",
    ratio: "square",
    artist: "Artist",
  },
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center font-extrabold w-full p-2 bg-gray-900 text-white">
        Art Gallery
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 items-center mx-8 max-sm:mx-4 mt-6">
        {artData.map((art, index) => (
          <ArtCard
            key={index}
            title={art.title}
            imageURL={art.imageURL}
            ratio={art.ratio}
            artist={art.artist}
            likes={Math.floor(Math.random() * 10000)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
