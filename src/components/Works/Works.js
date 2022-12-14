import React from 'react';
import { Link } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './WorksStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { works } from '../../constants/constants';


const Works = () => (
  <Section id="works">
    <SectionDivider />
    <SectionTitle main>Where I've Worked</SectionTitle>
    <GridContainer>
      {works.map((p, i) => {
        return (
          <BlogCard key={i}>
            {/* <Img src={p.image} /> */}

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <div>
              {p.type}
            </div>
            <Hr />
            <div>
              <CardInfo>
                <Link href={p.company_url} target="_blank">
                  {p.company}
                </Link>
              </CardInfo>
              {p.location}
            </div>

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Skills Used</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
              <TagList>
                {p.othertags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <div>
              <TagList>
                {p.duration}
              </TagList>
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Works;