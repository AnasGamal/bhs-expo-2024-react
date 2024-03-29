import { BlogContentPage, BlogPage, HomePage, AboutPage, EventPage, EventRegistration, ContactPage, SponsorPage, SchedulePage } from "./Pages"
import { Navbar, Footer } from "./components" 
import { Routes, Route } from "react-router-dom"

export default function App() {
  // let {loading, error, data} = useFetch("http://localhost:1337/api/blogs?populate=*")
  // let data = undefined;
  // if (loading)  return <div>Loading...</div>
  // if (error) return <div>Something went wrong: {error}</div>

  const data = undefined
  // console.log(data)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/blogs" element={<BlogPage />} /> */}
        <Route path="/blog/:slug" element={<BlogContentPage />} />
        <Route path="/about" element= {<AboutPage />} />
        <Route path="/event" element= {<EventPage />} />
        <Route path="/eventRegistration" element= {<EventRegistration />} />
        <Route path="/contact-us" element= {<ContactPage />} />
        <Route path="/sponsors" element= {<SponsorPage />} />
        <Route path="/schedule" element ={<SchedulePage/>} />
        
      </Routes>
      <Footer />
    </div>
 
  )
}