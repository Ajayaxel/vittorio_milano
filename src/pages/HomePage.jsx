import React from 'react'
import Hero from '../compontes/hero'
import Explore from '../compontes/Expolore'
import VideoCards from '../compontes/VideoCards'
import MovingTailor from '../compontes/MovingTailor'
import BookConsult from '../compontes/BookConsult'
import SidebarContact from '../compontes/SideBar'
import PremiumServices from '../compontes/CategoryGrid'
import AtelierSection from '../compontes/AtelierSection'
import ReviewSection from '../compontes/ReviewSection'
import Footer from '../compontes/Fotter'
import SwatchGallery from '../compontes/SwatchGallery'

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Sidebar Contact overlaying on Hero */}
      <div className="absolute top-0 right-0 z-20">
        <SidebarContact />
      </div>

      {/* Other Sections */}
      <Explore />
      <VideoCards />
      <MovingTailor />
      <BookConsult />
      <PremiumServices/>
      <SwatchGallery/>
      <AtelierSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
