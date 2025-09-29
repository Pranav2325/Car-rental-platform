import React from 'react'
import Hero from '../components/Hero'
import { dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Home = () => {
  return (
    <>
      <Hero />
      {dummyCarData.map((car)=>(
        <CarCard key={car} car={car}/>
      ))}
    </>
  )
}

export default Home