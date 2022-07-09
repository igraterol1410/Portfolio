import React from 'react'

import LogoCastor from '../assets/img/experience/b2b_hero.png';

import { AiFillThunderbolt } from "react-icons/ai";
AiFillThunderbolt
const Experience = () => {

  const myExperience = [
    {
      'company':'Castor Inc.',
      'logo': LogoCastor,
      'dates': 'Sep 2021 - Present',
      'role': 'Engineering',
      'modality': 'Remote',
      'tasks':[
        {'task':'Project migration from HTML and CSS to ReactJs, using SASS for styles.'},
        {'task':'Create new functionalities in a scalable way.'},
        {'task':'Manage the global state of the application using Redux Thunk.'},
        {'task':'Collaborative work with a group of developers using Git and GitHub.'},
        {'task':'Integration with third-party functionalities such as Google and Facebook.'},
        {'task':'Automated test development using Cypress.'},
        {'task':'Structured and organized work with Jira.'},
        {'task':'Create flows focused on user experience.'},
        {'task':'Build Service payment functionality using internal APIs.'}
      ]
    }
  ]

  return (
    <section id='experience' className='section-container'>
      <h2 className='section__title'>Experience</h2>
      {
        myExperience.map((exp) => (
          <a href="https://castor.app" target='_blank'>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" key={exp.company} className='grid__container experience__card'>
              <div>
                <h3 className='experience__company'>{exp.company}</h3>
                <p className='experience__role'>{exp.role} - <span className='experience__modality'>({exp.modality})</span></p>
                
                <p className='experience__dates'>{exp.dates}</p>
                <ul className='experience__task-list'>
                  {
                    exp.tasks.map((task) => (
                      <li className='experience__task-item' key={task.task}><AiFillThunderbolt className='experience__task-icon' />{task.task}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='experience__img-container'>
                <img className='experience__img' src={exp.logo} alt={`logo ${exp.company}`} />
              </div>
            </div>
          </a>
        ))
      }
    </section>
  )
}

export default Experience
