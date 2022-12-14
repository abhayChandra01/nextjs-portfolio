import AboutMe from '../components/AboutMe/AboutMe';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Works from '../components/Works/Works';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Projects from '../components/Projects/Projects';
import Certifications from '../components/Certifications/Certifications';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <AboutMe />
      <Works />
      <Projects />
      <Technologies />
      <Timeline />
      <Certifications />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
