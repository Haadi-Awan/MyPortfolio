import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.primary  };
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 20px 0;
  position: relative;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DiagonalBorder = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 3px; /* Adjust the height as needed */
  background: linear-gradient(
    45deg,
    transparent 49%,
    ${({ theme }) => theme.primary} 50%,
    transparent 51%
  );
`;

const Footer = () => {
  return (
    <FooterContainer>
      <DiagonalBorder />
      <CopyrightText>&copy; 2023 Your Company. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
