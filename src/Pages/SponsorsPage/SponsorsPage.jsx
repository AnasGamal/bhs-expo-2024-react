import React from "react";
import Presenters from "./Presenters.jpg";
import Presenters2 from "./presenter2.jpg";
import Samora from "./Samora.jpg";
function SponsorCard({ name, image, link }) {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 p-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className="w-150 h-150 object-cover" />
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-gray-800 font-bold mt-2"
      >
        {name}
      </a>
    </div>
  );
}

function PresentersGrid() {
  const presenters = [
    {
      name: "Dr Samori Camara",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
    {
      name: "Queen Taese",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
    {
      name: "Stephanie Love",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Presenters</h1>
      <div className="flex flex-wrap justify-center">
        {presenters.map((presenter) => (
          <SponsorCard key={presenter.name} {...presenter} />
        ))}
      </div>
    </div>
  );
}
function SponsorsPage() {
  const sponsors = [
    {
      name: "Presenter 1",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
    {
      name: "Presenter 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
    {
      name: "Presenter 3",
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="grid grid-cols-2 gap-4 mb-4 mx-4">
        <img
          src={Presenters}
          alt="Presenters"
          className="mx-auto my-auto w-full h-full object-contain"
        />
        <img
          src={Presenters2}
          alt="Presenters"
          className="mx-auto my-auto w-full h-full object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Sponsors</h1>
      <div className="flex flex-wrap justify-center">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
      <PresentersGrid />
    </div>
  );
}
export default SponsorsPage;
