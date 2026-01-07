import React from 'react';
import Navbar from './Components/church/Navbar';
import HeroSection from './Components/church/HeroSection';
import ScheduleSection from './Components/church/ScheduleSection';
import GallerySection from './Components/church/GallerySection';
import VideoSection from './Components/church/VideoSection';
import ContactSection from './Components/church/ContactSection';
import Footer from './Components/church/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ScheduleSection />
      <GallerySection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}