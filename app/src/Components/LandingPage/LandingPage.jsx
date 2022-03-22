import React from 'react'
import Banner from './Banner'
import Goals from './Goals'
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
    </div>
  )
}

export default LandingPage