import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import FooterBody from './FooterBody/FooterBody'
import Second from './Second/Second'
import './Footer.css'

const Footer = () => {
  return (
    <div className="f-wrapper">
      <Newsletter />
      <FooterBody />
      <Second />
    </div>
  )
}

export default Footer
