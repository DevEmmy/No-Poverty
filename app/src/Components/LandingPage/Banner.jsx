import React from 'react'

function Banner() {
  return (
    <div className='banner_compo'>
      
      <div className="search_compo">
        <input type="text"/>
        <button className='search_btn'>Search</button>
      </div>
        <div className="banner_text_contents">
            <h1>"Project Name Foundation"</h1>
            <p>Eradicating Poverty through Education & Entrepreneurship</p>
            <div className="join_us_btn">
              Join Us
            </div>
        </div>
    </div>
  )
}

export default Banner