import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:abhaychandra.work@gmail.com">
            abhaychandra.work@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; 2022{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abhay-chandra"
            >
              {" "}
              Abhay Chandra
            </Link>{" "}
            . All rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/abhayChandra01">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/abhay-chandra/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
