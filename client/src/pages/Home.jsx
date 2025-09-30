import React from 'react'
import Hero from '../components/Hero'
import { dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'
import FeaturedDection from '../components/FeaturedDection'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDection/>
      <Banner/>
      
    </>
  )
}

export default Home