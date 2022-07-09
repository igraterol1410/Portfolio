import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='section-container contact__container'>
      <div className='contact__content'>
          <p className='contact__question'>What’s Next?</p>
          <h3 className='contact__item contact__main'>
            Get In Touch
          </h3>
          <a href="https://wa.link/wmhrj8" target='_blank'><button className='contact__item contact__button'>Say hello!</button></a>
      </div>
    </section>
  )
}

export default Contact