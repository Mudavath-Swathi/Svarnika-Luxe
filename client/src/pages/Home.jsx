import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedCollection from '../components/FeaturedCollection'
import Craftsmanship from '../components/Craftsmanship'
import CollectionsPreview from '../components/CollectionsPreview'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'



const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      <FeaturedCollection/>
      <Craftsmanship/>
      <CollectionsPreview/>
      <Testimonials/>
      <Newsletter/>
      
    </>
  )
}

export default Home