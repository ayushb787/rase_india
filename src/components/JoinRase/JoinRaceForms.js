import React from 'react';
import Navbar from '../Navbar';
import '../JoinRase/JoinRaseForms.css';

const JoinRaseForms = () => {
  return (
    <div className="join-rase-container">
        <Navbar/>
      <iframe
        title="Google Form"
        src="https://forms.gle/Vn1aN21DgyhTB8828/"
        className='gform'
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ border: '1px solid #ccc' }}
      >
        Loading...
      </iframe>
    </div>
  );
};

export default JoinRaseForms;
