import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Product from '../components/Product'

function Home() {
  const location = {
    address: 'E-237AA, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055.',
    lat: 30.711183,
    lng: 76.688820,
  } // our location object from earlier
  
  return (
    <div>
    <Banner/>
    <Product/>
    <Footer location={location} zoomLevel={17}/>
    </div>
  )
}

export default Home