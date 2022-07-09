import React from 'react'
import { SiFacebook,SiInstagram,SiGithub,SiLinkedin } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div id='skills' className='social__links-section'>
      <a href="https://www.linkedin.com/in/isaid-graterol-05b45b164/" target='_blank'><SiLinkedin/></a>
      <a href="https://github.com/igraterol1410" target='_blank'><SiGithub/></a>
      <a href="https://www.facebook.com/isaid.graterol" target='_blank'><SiFacebook/></a>
    </div>
  )
}

export default SocialLinks
