import React from 'react';

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>My PortFolio</h2>
      <hr style={{ width: '200px' }} />
      <div className='portfolio-Box'>
        <div className='portfolio-item'>
          <a href='https://vishalsingh1619.github.io/ToDo-App-JS/' target='_blank'>
            <img
              src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy-projects/Todo_App_JS.png'
              alt=''
            />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://vishalsingh1619.github.io/Clock-JS/' target='_blank'>
            <img
              src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy-projects/digital-clock_masthead.png'
              alt=''
            />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://jovial-villani-de6053.netlify.app/' target='_blank'>
            <img src='https://i.ibb.co/XZvC1Mv/Screenshot-45.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://vishalsingh1619.github.io/PLANIFY-Task-1/' target='_blank'>
            <img src='https://i.ibb.co/Bnxy3gS/Screenshot-46.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://vishalsingh1619.github.io/ToDoList-UX/' target='_blank'>
            <img src='https://i.ibb.co/pb6VnVD/Screenshot-47.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://vishalsingh1619.github.io/Dummy-PORTFOLIO/' target='_blank'>
            <img src='https://i.ibb.co/smcvSzV/Screenshot-48.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
