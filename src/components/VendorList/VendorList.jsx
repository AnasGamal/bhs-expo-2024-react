import React from "react";

// A sample data for the vendor list
const vendors = [
  { name: "Black Homeschoolers of Central Florida, Inc.", sponsor: false },
  { name: "Black Classical Academy", sponsor: true },
  { name: "Plumbers & Pipefitters Local Union 295 JATC", sponsor: true },
  { name: "Kamali Academy", sponsor: false },
  { name: "Liberated Minds Black Homeschool & Education Institute", sponsor: false },
  { name: "NASA Launch Services Program", sponsor: false },
  { name: "Step Up for Students", sponsor: false },
  { name: "Exolith Lab", sponsor: false },
  { name: "Volusia County Solid Waste Division - Volusia Recycles", sponsor: false },
  { name: "American Legion Orange Baker Post 187", sponsor: false },
  { name: "Orange Baker Post 187 Historic Mobile Museum", sponsor: false },
  { name: "African-American Museum DeLand", sponsor: false },
  { name: "West Volusia Historical Society", sponsor: false },
  { name: "League of Women Voters Volusia", sponsor: false },
  { name: "WIN-HP", sponsor: false },
  { name: "8 Cents in A Jar", sponsor: false },
  { name: "US Army Recruiting Station", sponsor: false },
  { name: "Purpose Academy of Fine Arts", sponsor: false },
  { name: "CATALYST Global Youth Initiatives", sponsor: false },
  { name: "Youth Organizations Coalition", sponsor: false },
  { name: "West Volusia NAACP Youth Council", sponsor: false },
  { name: "DoTerra Essential Oils", sponsor: false },
  { name: "ArtHaus", sponsor: false },
  { name: "AdventHealth", sponsor: false },
  { name: "First Tee of Central Florida", sponsor: false },
  { name: "Bethune-Cookman University", sponsor: false },
  { name: "Lemmon Lab of Florida State University", sponsor: false },
  { name: "Embry-Riddle Aeronautical University", sponsor: false },
  { name: "National Society of Black Engineers-UCF", sponsor: false },
  { name: "Holiday Inn Express & Suites DeLand South", sponsor: false },
  { name: "Bishop & Brother’s Marching Warriors", sponsor: false },
  { name: "BHCFL Science National Honor Society", sponsor: false },
  { name: "Go Bubbles", sponsor: false },
  { name: "Black Biz Directory", sponsor: false },
  { name: "Florida Fish and Wildlife Conservation Commission", sponsor: false },
  { name: "Lyonia Environmental Center", sponsor: false },
  { name: "Hispanic Health Initiatives", sponsor: false },
  { name: "DeLand Fire Department", sponsor: false },
  { name: "Enchanted Colors by K. Ma’te’", sponsor: false },
  { name: "Votran- Volusia Transit Management", sponsor: false },
  { name: "Volusia County Public Library", sponsor: false },
  { name: "Deltona Regional Library", sponsor: false },
  { name: "Team Kareem", sponsor: false },
  { name: "Florida Bureau of Braille and Talking Books Library Services", sponsor: false },
  { name: "Florida Technical College", sponsor: false },
  { name: "Buffalo Soldiers Motorcycle Club Orlando", sponsor: false },
  { name: "Halifax Health", sponsor: false },
  { name: "G-Praise 106.3 Orlando", sponsor: false },
  { name: "DJ Niece D- Star 94.5", sponsor: false },
  { name: "Heroez Everywhere", sponsor: false },
  { name: "501st Legion Ra Kura Base", sponsor: false },
  { name: "Volusia County Sheriff’s Office- Community Relations", sponsor: false },
  { name: "American Red Cross Volusia-Flagler Counties", sponsor: false },
  { name: "J-Net Enterprise", sponsor: false },
  { name: "Kale Cafe", sponsor: false },
  { name: "Gatorland", sponsor: false },
  { name: "Kona Ice Daytona Beach", sponsor: false },
  { name: "Volusia County 4-H", sponsor: false },
  { name: "Vestwyze", sponsor: true },
  { name: "RAAO- Rising Against All Odds", sponsor: false },
  { name: "Stetson University Bonner Program", sponsor: false },
  { name: "Stetson University Center for Community Engagement", sponsor: false },
  { name: "Reign Academy School of Entrepreneurship", sponsor: false },
  { name: "Orisha Sage", sponsor: false },
  { name: "Gamma Beta Chi Fraternity Incorporated", sponsor: false },
  { name: "Embry Riddle Bethune Cookman EcoCAR", sponsor: false },
  { name: "Orijin Foundation, Inc.", sponsor: false },
  { name: "Therapy Essentials Inc.", sponsor: false },
  { name: "Live Music Tutor", sponsor: true },
  { name: "NIECY ENTERPRISEZ", sponsor: false },
  { name: "Momqu Essentials", sponsor: false },
  { name: "CoolVu of Central Florida", sponsor: false },
  { name: "Claire's Amazing Soups and Trail Mix", sponsor: false },
  { name: "Natural Hair Really Rocks by MoeMo’s", sponsor: false },
  { name: "EYE TECH FAM INC", sponsor: false },
  { name: "Honey and Fig Body", sponsor: false },
];

// A function component that renders a single vendor item
const VendorItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="text-lg">{item.name}</div>
      {item.sponsor && (
        <div className="text-sm text-white bg-green-500 px-2 py-1 rounded">
          Sponsor
        </div>
      )}
    </div>
  );
};

// A function component that renders the vendor list component
const VendorList = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-4">Vendors Listing</h1>
      <div className="max-w-4xl mx-auto overflow-y-scroll h-96">
        {vendors.map((item, index) => (
          <VendorItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VendorList;
