import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutHome from './components/AboutHome'
import HomeServices from './components/HomeServices'
import WhyChooseUs from './components/WhyChooseUs'
import ActivityFinder from './components/ActivityFinder'
import HomeTestimonials from './components/HomeTestimonials'
import HomeLocation from './components/HomeLocation'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

import Legal from './pages/Legal'
import UrbanDancePage from './pages/UrbanDancePage'
import MusicPage from './pages/MusicPage'
import SeniorPage from './pages/SeniorPage'
import GymPage from './pages/GymPage'
import FlamencoPage from './pages/FlamencoPage'
import OtherServicesPage from './pages/OtherServicesPage'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    <AboutHome />
    <HomeServices />
    <WhyChooseUs />
    <ActivityFinder />
    <HomeTestimonials />
    <HomeLocation />
    <FinalCTA />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/danza-urbana"
          element={
            <>
              <Navbar />
              <UrbanDancePage />
              <Footer />
            </>
          }
        />

        <Route
          path="/musica"
          element={
            <>
              <Navbar />
              <MusicPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/senior"
          element={
            <>
              <Navbar />
              <SeniorPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/gym"
          element={
            <>
              <Navbar />
              <GymPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/flamenco-danza-espanola-sevillanas"
          element={
            <>
              <Navbar />
              <FlamencoPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/otros-servicios"
          element={
            <>
              <Navbar />
              <OtherServicesPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App