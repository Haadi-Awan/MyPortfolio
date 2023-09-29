import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../social';

const ContactInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 40px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 2px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ContactTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ContactDetails = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Contact = () => {
  return (
    <ContactInfoContainer id='contact'>
      <ContactTitle>Contact Information</ContactTitle>
      <ContactDetails>
        <p>Name: Haider Saleem</p>
        <p>Email: haiderawan1220@gmail.com</p>
        <p>Phone: 0300-8120990</p>
      </ContactDetails>
      <SocialMedia/>
    </ContactInfoContainer>
  );
};

export default Contact;
