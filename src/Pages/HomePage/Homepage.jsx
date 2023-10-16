import HomepageAbout from "./HomepageAbout";
import Hero from "./Hero";
import HomePageAdvertize from "./HomePageAdvertize";
import { useState, useEffect } from "react";
import { getPageBySlug } from "../../services/sanity";
import { sectionRenderer } from "../../utils/section-renderer";


const Homepage = () => {
  const [page, setPage] = useState({});

  useEffect(() => {
    async function fetchData() {
        const fetchedPage = await getPageBySlug("home");
        setPage(fetchedPage);
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  if (!page.pageBuilder) {
    return <div></div>
  }

  return page.pageBuilder.map((section) => {
    return sectionRenderer(section);
  });
  // return (
  //   <div className="relative w-full h-full fixed bg-[#0A2426] py-[0px] full-width">
  //     <div className="max-w-100%">
  //       <Hero />
  //       <HomepageAbout />
  //       <HomePageAdvertize/>
  //     </div>
  //   </div>
  // );
};

export default Homepage;
