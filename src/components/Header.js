import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className='header'>
      <div className='heading'>
        <h2>VISHAL SINGH</h2>
      </div>
      <div className='navBox'>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-item nav-link active' smooth to='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
              <Link className='nav-item nav-link' smooth to='/#about'>
                About
              </Link>
              <Link className='nav-item nav-link' smooth to='/#portfolio'>
                PortFolio
              </Link>

              <Link className='nav-item nav-link' smooth to='#contact'>
                Contact us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
