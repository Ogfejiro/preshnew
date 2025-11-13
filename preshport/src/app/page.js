import About from '@/components/About';
import Nav from '@/components/Nav'
import Services from '@/components/Services';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default page;