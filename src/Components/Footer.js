import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaArrowUp} from "react-icons/fa";

const iconSize = 23;

export default function App() {

  //I created this function to ensure the social medai icons open in a new tab
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <MDBFooter id='footer' className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          
        <button className='btn btn-outline-light m-1' onClick={() => openLinkInNewTab('https://github.com/ubarkaz') }>
            <FaGithub size={iconSize} />
          </button>

          <button className='btn btn-outline-light m-1' onClick={() => window.location.href='#!'}>
            <FaLinkedin size={iconSize} />
          </button>

          <button className='btn btn-outline-light m-1' onClick={() => window.location.href='#!'}>
            <FaFacebook size={iconSize} />
          </button>

          <button className='btn btn-outline-light m-1' onClick={() => window.location.href='#!'}>
            <FaTwitter size={iconSize} />
          </button>


          <button className='btn btn-outline-light m-1' onClick={() => window.location.href='#!'}>
            <FaInstagram size={iconSize} />
          </button>

        </section>

       

        <section className='mb-4'>
        <p>&copy; Ubar Kasozi 2023 ||  All rights reserved  || Terms and conditions apply</p>
        </section>

        <button className='btn btn-outline-light' onClick={scrollToTop}>
          <FaArrowUp size={iconSize} />
        </button>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    
        <p>Developed in React js and Emailjs </p>

      </div>

      
    </MDBFooter>
  );
}