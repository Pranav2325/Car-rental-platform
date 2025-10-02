import React from 'react'
import Hero from '../components/Hero'
import { dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'
import FeaturedDection from '../components/FeaturedDection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDection/>
      <Banner/>
      <Testimonial/>
      <Newsletter/>
      
      
    </>
  )
}

export default Home