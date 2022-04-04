import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className='about' id='about'>
      <img
        src='https://i.ibb.co/DpbQn8K/12-tips-every-it-guy-should-know-man-with-laptop-11562889285hwldim1kbf-removebg-preview.png'
        alt=''
      />
      <div className='aboutMe'>
        <h3>About me</h3>
        <hr style={{ width: '200px', marginRight: '300px' }} />
        <p>
          I'm a web designer & front-end developer with 7 years of professional
          experience. I'm interested in all kinds of visual communication, but
          my major focus is on designing web, mobile & tablet interfaces. I also
          have skills in other fields like branding, icon design or web
          development.
        </p>
        <p>
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not pushing pixels, you'll find me cooking,
          gardening or working out in the park.
        </p>
      </div>
      <div className='library'>
        <p style={{ marginLeft: '20px', marginTop: '10px' }}>
          Languages/Library/Technology
        </p>
        <div className='logo'>
          <div className='logo-item'>
            <img
              src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://www.kindpng.com/picc/m/476-4768341_javascript-logo-number-angularjs-node-javascript-transparent-background.png'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://miro.medium.com/max/512/0*3BrqggZ8xmuaAnu7.png'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://logowik.com/content/uploads/images/nodejs-icon.jpg'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://avatars.githubusercontent.com/u/2918581?s=280&v=4'
              alt=''
            />
          </div>
          <div className='logo-item'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
