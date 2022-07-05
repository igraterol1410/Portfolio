import React from 'react'

import KokoroPic from '../assets/img/projects/Kokoro.png'
import CO2Pic from '../assets/img/projects/CO2-Footprint.png'
import Dbocados from '../assets/img/projects/Dbocados-Home.png'

const Proyects = () => {

  const myProjects = [
    {
      name: 'CO2 Footprint',
      photo: CO2Pic,
      description:'A web application for companies that allows you to have statistics on the pollutants they generate. It has two back-offices, one for companies and one for the administrator.Made with ReactJs, using Redux Toolkit for global application state management, SASS for styles, axios to fetch API data, and ChartJs for graphics.',
      link:'https://backoffice.carbonoapp.com/',
      tech:'ReactJs, Redux Toolkit, SASS, axios, ChartJs'
    },
    {
      name: 'Kokoro',
      photo: KokoroPic,
      description:'Built a mobile version of Kokoro, a Chilean web application with all the steps to recruit workers. Developed with ReactJs and Styled Components.',
      tech:'ReactJs, Styled Components'
    },
    {
      name: 'D’bocados Home',
      photo: Dbocados,
      description:'Confectionery and pastry company website, where you can detail the services they offer and quote your personalized cake. 100% responsive site developed with HTML, CSS, JavaScript for styles and features and firebase for data processing.',
      link:'https://kind-gates-952228.netlify.app/',
      tech:'HTML, CSS, JavaScript, Firebase'
    },
  ]

  return (
    <section id='projects' className='section-container'>
      <h2 className='section__title'>Projects</h2>
      <div className='projects__container'>
        {
          myProjects.map((project, index) =>(
            <div className='grid__container project__card' key={project.name}>
              <div className={index === 1 || index === 3 ? 'project__image-container child__od' : 'project__image-container'}>
                <a href={project.link} target='_blank'><img src={project.photo} alt="" /></a>
              </div>
              <div className={index === 1 || index === 3 ? 'project__description-container description__odd' : 'project__description-container'}>
                <h4 className='project__name'><a href={project.link} target='_blank'>{project.name}</a></h4>
                <p className='project__description-text'>{project.description}</p>
                <p className='project__description-tech'>{project.tech}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Proyects