import React from 'react'

import KokoroPic from '../assets/img/projects/Kokoro.png'
import CO2Pic from '../assets/img/projects/CO2-Footprint.png'
import Dbocados from '../assets/img/projects/Dbocados-Home.png'
import InversionesRamos from '../assets/img/projects/Inversiones-ramos.png'
import EnzoInfoSolutions from '../assets/img/projects/Enzo-info-solutions.png'

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
      name: 'Enzo Info Solutions',
      photo: EnzoInfoSolutions,
      description:'Landing Page for Enzo Info Solutions. Global outsourcing company with a focus based on offering services across domains including Web development, Internet Marketing, Mobile App Development, Technical Consulting, E-commerce Solutions, and Software Application Management to our clients.',
      link:'https://enzoinfotech.azurewebsites.net/',
      tech:'ReactJs, GatsbyJs, ChakraUI'
    },
    {
      name: 'Inversiones Ramos',
      photo: InversionesRamos,
      description:'Website for a cleaning products distribution company, with a digital catalog where the user can search for desired products and an application for generating quotes for products requested by the customer.',
      link:'https://inversionesramos.vercel.app/cotizar',
      tech:'ReactJs, ChakraUI, EmailJs'
    },
    {
      name: 'Kokoro',
      photo: KokoroPic,
      description:'Built a mobile version of Kokoro, a Chilean web application with all the steps to recruit workers. Developed with ReactJs and Styled Components.',
      link:'https://front-kokoro.vercel.app/process',
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
            <a href={project.link} target='_blank'>
              <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000" className='grid__container project__card' key={project.name}>
                  <div className={index === 1 || index === 3 ? 'project__image-container child__od' : 'project__image-container'}>
                    <img src={project.photo} alt="" />
                  </div>
                <div className={index === 1 || index === 3 ? 'project__description-container description__odd' : 'project__description-container'}>
                  <h4 className='project__name'><a href={project.link} target='_blank'>{project.name}</a></h4>
                  <p className='project__description-text'>{project.description}</p>
                  <p className='project__description-tech'>{project.tech}</p>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Proyects