import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

const Home = () => {
  return (
    <>
           
        <div><Navbar /> </div>
        <div className='mb-4'><Hero /></div>   
        <div><Footer /></div>   
            
    </>
  )
}

export default Home