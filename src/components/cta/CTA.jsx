import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p className='fs-12 lh-27'>Request Early Access to Get Started</p>
        <h3 className='fs-24 lh-45'>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" className='fs-16 lh-27'>Get Started</button>
      </div>
    </div>
  )
}

export default Cta