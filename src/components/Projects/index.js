import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 40px;
`;

const ProjectsTitle = styled.h2`
  font-size: 40px;
  padding: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 40px;
  flex: 1;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectList>
        <ProjectCard>
          <ProjectName>Parallax Website :</ProjectName>
          <ProjectDescription>
            A stunning parallax-scrolling website project.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectName>Library Management System :</ProjectName>
          <ProjectDescription>
            An efficient library management system.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectName>Calculator :</ProjectName>
          <ProjectDescription>A simple calculator application.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectName>Google Dinosaur Game :</ProjectName>
          <ProjectDescription>
            A fun endless runner game for the browser.
          </ProjectDescription>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
