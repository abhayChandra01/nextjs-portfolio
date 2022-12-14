import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './CertificationsStyles';

const data = [
  { name: "AWS Cloud Practitioner", org:'Amazon' , text: '(06/2021)' },
  { name: "MERN Stack Project Completion", org:'Aurbitus', text: '(01/2022 - 03/2022)', },
  { name: 'Node.js Internship Completion', org:'Numeric Infosystem Pvt. Ltd.', text: '(07/2021 - 11/2021)', },
  { name: 'C Language', org:'P.S Softech', text: '(02/2021 - 04/2021)', },

];

const Certifications = () => (
  <Section id='certifications'>
    <SectionTitle>My Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum> */}
          <BoxNum  style={{fontSize:'2rem'}}>{card.name}</BoxNum>
          <BoxText>{card.org}</BoxText>
          <BoxText style={{marginTop:'1rem'}}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Certifications;