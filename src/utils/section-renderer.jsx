import Hero from "../Pages/HomePage/Hero";
import HomepageAbout from "../Pages/HomePage/HomepageAbout";
import HomePageAdvertize from "../Pages/HomePage/HomePageAdvertize";

export function sectionRenderer(section) {
    switch (section._type) {
      case "hero":
        return <Hero key={section._key} data={section} />;
      case "textWithCallToAction":
        return <HomepageAbout key={section._key} data={section} />;
      default:
        return;
    }
  }