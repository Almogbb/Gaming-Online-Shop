import React, { useRef } from 'react';

import './SubscriberForm.css';

export default function SubscribeForm() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();

  function formSubmissionHandler(ev) {
    ev.preventDefault();
  }

  return (
    <section className='form-layout'>
      <div className='form-container'>
        <div className='info'>
          <h2>We Choose You</h2>
        </div>
        <form onSubmit={formSubmissionHandler}>
          <h2>Subscribe to our newslatter</h2>
          <ul>
            <li className='no-list'>
              <label htmlFor='first-name'></label>
              <input
                ref={firstNameInputRef}
                placeholder='First Name'
                className='input-field'
                type='text'
                name='first-name'
                required
              />
            </li>
            <li className='no-list'>
              <label htmlFor='last-name'></label>
              <input
                placeholder='Last Name'
                className='input-field'
                ref={lastNameInputRef}
                type='text'
                name='last-name'
                required
              />
            </li>
            <li className='no-list'>
              <label htmlFor='email'></label>
              <input
                placeholder='E-mail'
                className='input-field'
                ref={emailInputRef}
                type='email'
                name='email'
                required
              />
            </li>
            <li className='no-list'>
              <button className='join-btn'>Join Us</button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}
