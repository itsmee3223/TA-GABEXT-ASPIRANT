import React from 'react';
import Wrapper from './styles';
const Footer = () => {
  return (
    <Wrapper>
      <div className=''>
        <h1>Location</h1>
        <p>
          Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, Kec. Kedaton, Kota Bandar
          Lampung, Lampung 35132
        </p>
      </div>
      <div className='underline'></div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Circle Acc </span>- All Rights Reserved
      </h5>
    </Wrapper>
  );
};

export default Footer;
