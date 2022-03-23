import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Goals from './Goals'
import Help from './Help'
import Nav from './Nav'
import Why from './Why'

function LandingPage() {
  return (
    <div>
        <Nav />
        <hr />
        <Banner />
        <Goals />
        <Why />
        <Help />
        <Footer />
    </div>
  )
}

export default LandingPage