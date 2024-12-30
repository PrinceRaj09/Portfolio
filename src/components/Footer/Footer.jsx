import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className='footer__title'>Prince</h1>


        <ul className="footer__list">

          <li>
            <a href="" className='footer__link'>About</a>
          </li>

          <li>
            <a href="#project" className='footer__link'>Project</a>
          </li>

          <li>
            <a href="#testimonials" className='footer__link'>Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">

      <a 
      href='https://www.instagram.com/iam_prince_aryan/'
      className='footer__social-link' target='_blank'>
        <i className='bx bxl-instagram'></i>
      </a>

      <a 
      href='https://www.linkedin.com/in/prince-raj-2135642b6/'
      className='footer__social-link' target='_blank'>
        <i className='bx bxl-linkedin'></i>
      </a>

      <a 
      href='https://twitter.com'
      className='footer__social-link' target='_blank'>
        <i className='bx bxl-twitter'></i>
      </a>

        </div>

        <span className="footer__copy">
          &#169; 2024 - Prince. All right reversed
        </span>
      </div>

    </footer>
  )
}

export default Footer