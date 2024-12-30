import React from 'react'
import Works from './Works'
import './work.css'
import Testimonials from '../Testimonials/Testimonials'

const Work = () => {
  return (
    <section className="work section" id='project'>

        <h2 className="section__title">Projects</h2>
        <span className='section__subtitle'>Most recent works</span>

        <Works />
        <Testimonials />

    </section>
  )
}

export default Work