import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text fs-62 lh-75'>
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p className='fs-20'>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-lonks_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p className='fs-12'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4 className='fs-16'>Links</h4>
          <p className='fs-12'>Overons</p>
          <p className='fs-12'>Social Media</p>
          <p className='fs-12'>Counters</p>
          <p className='fs-12'>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4 className='fs-16'>Company</h4>
          <p className='fs-12'>Terms & Conditions </p>
          <p className='fs-12'>Privacy Policy</p>
          <p className='fs-12'>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4 className='fs-16'>Get in touch</h4>
          <p className='fs-12'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='fs-12'>085-132567</p>
          <p className='fs-12'>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p className='fs-12'>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer