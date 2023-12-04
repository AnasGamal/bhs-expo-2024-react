import React, { useEffect } from "react";
import Presenters from "./Presenters.jpg";
import Presenters2 from "./presenter2.jpg";
import Samora from "./Samora.jpg";
import VendorList from "../../components/VendorList/VendorList";
import { useLocation } from "react-router-dom";
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
      image:
        "https://images.squarespace-cdn.com/content/v1/605517736f28311584782dfd/1616595946221-6O0F0LRQGUZIGKQ1B3NZ/A230E4C8-7612-4E0B-B383-D7E569A97D5B_1_201_a.jpg?format=1500w",
      link: "https://www.example.com",
    },
    {
      name: "Queen Taese",
      image:
        "https://voyageatl.com/wp-content/uploads/2020/03/personal_photo-122-1000x600.jpg",
      link: "https://www.example.com",
    },
    // {
    //   name: "Stephanie Love",
    //   image: "https://via.placeholder.com/150",
    //   link: "https://www.example.com",
    // },
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
  const location = useLocation();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [location]);
  const sponsors = [
    {
      name: "GOLD SPONSOR ",
      image:
        "https://static.wixstatic.com/media/10626d_67b12c76e8804a96a93d28166dfe4f40~mv2.png/v1/fill/w_453,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10626d_67b12c76e8804a96a93d28166dfe4f40~mv2.png",
      link: "https://www.example.com",
    },
    {
      name: "SILVER SPONSOR",
      image:
        "https://static.wixstatic.com/media/10626d_0b0b4d995bad4c7494c2dcef3dd67321~mv2.png/v1/fill/w_453,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10626d_0b0b4d995bad4c7494c2dcef3dd67321~mv2.png",
      link: "https://www.example.com",
    },
    {
      name: "Bronze Sponsor",
      image:
        "https://static.wixstatic.com/media/10626d_b92be436cd224fe699ad2c71497851f7~mv2.png/v1/fill/w_453,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10626d_b92be436cd224fe699ad2c71497851f7~mv2.png",
      link: "https://www.example.com",
    },
    {
      name: "Bronze Sponsor",
      image:
        "https://static.wixstatic.com/media/10626d_5982534094064a80ac536628f4ef60eb~mv2.png/v1/fill/w_453,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10626d_5982534094064a80ac536628f4ef60eb~mv2.png",
      link: "https://www.example.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4 mb-4 mx-4">
        <img
          src={Presenters}
          alt="Presenters"
          className="mx-auto my-auto w-full h-full object-fill"
          style={{ width: "100%", height: "60%" }}
        />
        <img
          src={Presenters2}
          alt="Presenters"
          className="mx-auto my-auto w-full h-full object-fill"
          style={{ width: "100%", height: "60%" }}
        />
      </div>
      <h1 className="text-3xl font-bold text-center mt-2">Our Sponsors</h1>
      <div className="flex flex-wrap justify-center">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
      <PresentersGrid />
      <VendorList/>
    </div>
  );
}
export default SponsorsPage;
