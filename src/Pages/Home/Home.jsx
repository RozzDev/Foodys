import React from 'react'
import Hero from '../../component/Hero/Hero'
import Offer from '../../component/Offer/Offer'
import Resturant from '../../component/Resturant/Resturant'
import Special from '../../component/Special/Special'
import Our from '../../component/Our/Our'
import Testimonial from '../../component/Testimonial/Testimonial'
import Blog from '../../component/Blog/Blog'
import Navbar from '../../component/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <Resturant />
      <Special />
      <Our />
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home
