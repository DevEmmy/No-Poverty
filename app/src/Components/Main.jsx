import React from 'react'
import Search from './Search'

function Main() {
  return (
    <div className='main_compo'>
        <Search />

        <div className="sections">
          <div className="section">
          <div className="img"></div>
          <h3>Take a Course or More</h3>
            
          </div>

          <div className="section">
            <div className="img"></div>
            <h3>
              Request for a Fund
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Main