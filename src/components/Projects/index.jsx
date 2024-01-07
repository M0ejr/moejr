import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider, Desc } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are the projects that I created using the skills mentioned above.</Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton key="all" active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton key="all" value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton key="web app" active value="web app" onClick={() => setToggle('web app')}>
              WEB APPS
            </ToggleButton>
          ) : (
            <ToggleButton key="web app" value="web app" onClick={() => setToggle('web app')}>
              WEB APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'machine learning' ? (
            <ToggleButton
              key="machine learning"
              active
              value="machine learning"
              onClick={() => setToggle('machine learning')}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton key="machine learning" value="machine learning" onClick={() => setToggle('machine learning')}>
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};


export default Projects;