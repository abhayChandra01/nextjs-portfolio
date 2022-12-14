import React from 'react';
import { Link } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ProjectsData } from '../../constants/constants';


const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>My Projects</SectionTitle>
    <GridContainer>
      {ProjectsData.map((p, i) => {
        return (
          <BlogCard key={i}>
          
            <HeaderThree title={p.name}>{p.name}</HeaderThree>
            
            <Hr />
           

            <CardInfo className="card-info">{p.details}</CardInfo>
            <div>
              <TitleContent>Tech Used</TitleContent>
              <Hr />
              <TagList>
                {p.tech.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
              <TagList>
                {p.othertech.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
           
            
            <UtilityList>
             
              <ExternalLinks href={p.github} target='_blank'>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;