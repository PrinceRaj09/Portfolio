import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>

      <a 
      href='https://www.linkedin.com/in/prince-raj-2135642b6/'
      className='home__social-icon' target='_blank'>
        <i className='uil uil-linkedin-alt'>
        </i>
      </a>

      <a
       href='https://github.com/princeraj09'
       className='home__social-icon' target='_blank'>
        <i className='uil uil-github-alt'></i>
      </a>

      <a 
      href='https://www.instagram.com/iam_prince_aryan/'
      className='home__social-icon' target='_blank'>
        <i className='uil uil-instagram'></i>
      </a>

      <a 
      href='https://twitter.com'
      className='home__social-icon' target='_blank'>
        <i className='uil uil-twitter-alt'></i>
      </a>

    </div>
  )
}

export default Social