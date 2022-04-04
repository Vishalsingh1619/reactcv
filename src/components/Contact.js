import React from 'react';

const Contact = () => {
  return (
    <>
      <h1 id='contact'>Contact Me</h1>
      <hr style={{ width: '210px' }} />
      <div className='contact-me'>
        <div className='first-div'>
          <h2>Let's Connect</h2>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain...
          </p>
          <br />
          <h5>vishal16908@gmail.com</h5>
          <h5>1(123) 456-7890</h5>
          <h5>1234 Street Lb Virginia Beach, VA 12345</h5>
        </div>
        <div className='second-div'>
          <h2>Send Me A Message</h2>
          <form>
            <label className='required'>First & Last Name </label>
            <br />
            <input type='text' name='name' />
            <br />
            <label className='required'>Phone Number </label>
            <br />
            <input type='number' /> <br />
            <label className='required'>E-mail Address </label>
            <br />
            <input type='email' id='email' name='name' /> <br />
            <label className='required'>Message </label>
            <br />
            <textarea
              id='message'
              name='message'
              placeholder='Your Message Here...'
            />
            <br />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
