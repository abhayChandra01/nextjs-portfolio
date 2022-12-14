import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="https://res.cloudinary.com/dmxegonfd/image/upload/v1671001598/oie_VRfS8PRCGBCi_on9ukx.png" height={50} width={50} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Abhay Chandra</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about-me">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#works">
          <NavLink>Work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>

    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/abhayChandra01">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/abhay-chandra/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
