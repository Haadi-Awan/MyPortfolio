import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import {DiCssdeck} from "react-icons/di";
import { Bio } from '../../data/constants';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  padding: 0 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.primary_hover};
  }

  @media screen and (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 32px;
  padding-left: 220px;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 29px; /* Increase padding for a better visual effect */
  font-size: 1rem;
  font-weight: 500;
  text-decoration:none;
  cursor: pointer;
  font-weight:bolder;
  height: 70%;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add transitions for background-color and color */

  &:hover {
      transform: scale(1.05);
      color: ${({ theme }) => theme.white};
      transition: all 0.4s ease-in-out;
       background-color: ${({ theme }) => theme.primary};
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
    } 

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span= styled.span`
    paddind: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

 const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

 const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};

`;

 const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

 const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

 const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

 const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;


const Navbar = () => {
  const [open,setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
            <a 
                style={{
                    display:"flex",
                    alignitems: "center",
                    color: "white",
                    marginBottom:"20",
                    cursor: "pointer",
                }}
            >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
            </a>
            <MobileIcon>
                <faBars
                  onClick={() => {
                    setOpen(!open);
                  }}
                  />
            </MobileIcon>
        </NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          
        </NavItems>
        <ButtonContainer>
        <a href="https://github.com/Haadi-Awan" target="_blank" rel="noopener noreferrer" 
          style={{
            textDecoration:"none",
          }}>
             <GithubButton href={Bio.github} target='display'>Github Profile</GithubButton>
        </a>
          
        </ButtonContainer>
      </NavContainer>
      {
          open &&
          <MobileMenu open={open}>
            <MobileLink href="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileLink>
            <GithubButton
             style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} 
             href={"/"} target="_blank">
             Github Profile</GithubButton>
          </MobileMenu>
        }
    </Nav>
  );
};

 export default Navbar;
