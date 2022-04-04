import React from 'react';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <h1 style={{ color: '#FCA738' }}>Hi, I am Vishal Singh</h1>
        <h1 style={{ color: '#FBF3E4' }}>A front-end Developer</h1>
      </div>
      <div className='dummy'>
        <img
          src='https://i.ibb.co/tCYvTw9/666-6668342-man-on-laptop-man-with-laptop-png-transparent-removebg-preview.png'
          alt=''
        />
      </div>
      <div className='hireResume'>
        <p>Get ready to turn ideas into Reality</p>
        <button style={{ backgroundColor: '#09BEAD' }}>Hire Me</button>
        <button style={{ backgroundColor: '#FCA738' }}>Get Resume</button>
      </div>
    </div>
  );
};

export default Home;
