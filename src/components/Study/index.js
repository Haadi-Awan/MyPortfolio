import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 40px;
`;

const EducationTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const EducationCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.primary};
  }
}`;

const SchoolName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const SchoolDate = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const SchoolGrade = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const SchoolDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: left;
`;

const educationData = [
  {
    id: 0,
    school: "University of Punjab, Lahore",
    date: "Oct 2020 - Sep 2024",
    grade: "3.0 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at the University of Punjab. I have completed 6 semesters and have a CGPA of 3.0. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at UOP, where I am learning and working on exciting projects with a team of talented developers.",
  },
  {
    id: 1,
    school: "GC University, Lahore",
    date: "Apr 2018 - Apr 2020",
    grade: "87.92%",
    desc: "I completed my class 12 high school education at GCU, Lahore, where I studied ICS.",
  },
  {
    id: 2,
    school: "SWEET WAYS PUBLIC School, Dankuni",
    date: "Apr 2016 - Apr 2019",
    grade: "93.3%",
    desc: "I completed my class 10 education at SWP-School, Lahore, where I studied Science with Computer Application.",
  },
];

const Education = () => {
  return (
    <EducationContainer id='education'>
      <EducationTitle>Education</EducationTitle>
      {educationData.map((edu) => (
        <EducationCard key={edu.id}>
          <SchoolName>{edu.school}</SchoolName>
          <SchoolDate>{edu.date}</SchoolDate>
          {edu.grade && <SchoolGrade>Grade: {edu.grade}</SchoolGrade>}
          <SchoolDescription>{edu.desc}</SchoolDescription>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default Education;
