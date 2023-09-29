import React from 'react';
import styled from 'styled-components';

// Import social media icons from an icon library (e.g., react-icons)
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialMediaContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 40px;
  text-align: center;
`;

const SocialMediaTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;

  a {
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaTitle>Connect with me on social media :</SocialMediaTitle>
      <SocialMediaLinks>
        <a href="https://www.linkedin.com/in/haadi-awan-a75766255" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/haider.awan.7568?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/haiderawan321?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Haadi-Awan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SocialMediaLinks>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
