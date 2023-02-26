import { keyframes, styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { Picture } from '@components/Picture';
import EventPicture from '../../public/images/eventpicture.jpeg';
const scrollAnimation = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(calc(-130px * 5))' },
});

const StyledServicesSection = styled('section', {
  '> div': {
    paddingTop: '5rem',
    paddingBottom: '6rem',

    '@md': { paddingTop: '6rem' },

    '.services-description': {
      maxWidth: '37.5rem',

      '.title': { marginTop: '1rem', marginBottom: '1.5rem' },

      p: { marginBottom: '1rem', color: '$subtext' },
    },

    '.services-tab-list': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.5rem',
      marginTop: '2rem',
      marginBottom: '1rem',

      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '0.5rem',
        py: '0.5rem',
        paddingLeft: '0.75rem',
        paddingRight: '1rem',
        color: '$primary900',
        fontSize: '$small',
        fontWeight: 500,
        lineHeight: '$small',
        borderRadius: '$default',
        transition: '$default',

        '[data-emoji]': {
          display: 'none',

          '@sm': { display: 'block' },
        },

        '&[aria-selected="true"], &:hover': {
          background: '$secondary50',
        },
      },
    },

    '.services-tab-panels': {
      '.exit-animation': { transition: 'all ease-in 200ms' },
      '.enter-animation': { transition: 'all ease-out 300ms' },
      '.opacity-animation-start': { opacity: 0 },
      '.opacity-animation-end': { opacity: 1 },

      '> div[role="tabpanel"]': {
        position: 'relative',
        maxWidth: '42rem',
        px: '1rem',
        py: '2rem',
        borderRadius: '$default',
        background: '$secondary50',

        '.services-tab-title': {
          fontWeight: 500,
          fontSize: '$big',

          span: { borderBottom: '3px solid $primary50' },
        },

        '.services-tab-description-list': {
          marginTop: '2rem',
          marginBottom: '2.5rem',
          listStyleType: 'disc',

          li: {
            my: '1rem',
            paddingLeft: '0.5rem',

            '&::marker': { color: '$secondary500' },
          },
        },

        '.services-tab-examples': {
          overflow: 'hidden',
          position: 'relative',

          '.services-tab-example-list': {
            display: 'flex',
            gap: '0.5rem',
            width: 'calc(130px * 10)',
            animation: `${scrollAnimation} 30000ms linear infinite`,

            'li > span': {
              transition: '$default',

              '&:hover': { background: '$primary50', cursor: 'default' },
            },
          },
        },
      },
    },

    '.services-technologies': {
      marginTop: '3rem',

      '> span': { color: '$subtext' },

      ul: {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '1rem',
        rowGap: '0.5rem',
        my: '1rem',
      },

      li: {
        fontSize: '$small',
        lineHeight: '$small',
        color: '$subtext',

        svg: { marginRight: '0.125rem', maxWidth: 14 },

        '&:hover': { color: '$primary900', cursor: 'default' },
      },
    },
  },
});

export const ServicesSection: React.FC = () => {
  return (
    <StyledServicesSection id="services-section">
      <ContentWrapper>
        <div className="services-description">
          <h3 className="title">How I Can Help You</h3>
          <p>
          I’m an independent Web user interface and design systems engineer, author, speaker, and trainer based in Lebanon. I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.
          </p>
          <p>Sarmad recently awarded Core Team Developer in <Link to="https://gdg.community.dev/u/mbkmt8/"> Google Cloud Developer </Link> title for GSuite and Google Apps Script.

I work with companies and agencies around the world, building Web user interfaces, design systems, and digital products with focus on responsive design, accessibility, performance, and cutting-edge tech. I’ve worked with teams at companies like ProPakistani, ViralWebbs, Khan Academy, Bosch, and more.
            </p>
            <h2>Certified Freelance Developer of Pakistan</h2>
            <p>I found blogging to be a great medium for sharing my favorite things with the world. Initially, I started writing random stuff, but later on, I discovered how to make money blogging. I discovered “The Way” to become my boss through the power of the internet. This was when I started sharing those things that worked for me. Blogging has given me so much more than money. It’s given me a sense of freedom that I didn’t know was possible. </p>
            <p>I found blogging to be a great medium for sharing my favorite things with the world. Initially, I started writing random stuff, but later on, I discovered how to make money blogging. I discovered “The Way” to become my boss through the power of the internet. This was when I started sharing those things that worked for me. Blogging has given me so much more than money. It’s given me a sense of freedom that I didn’t know was possible. </p>
            
            <p>I currently live a “free” lifestyle where I travel around Pakistan and blog from anywhere. I used to be an introvert, but now I speak in front of hundreds of people at events & seminars. Last year on 10 December 2019 I became a Core team member of Google Cloud Islamabad it was a great thing for me as a blogger I learn so many things to be a part of GDG Cloud. I get to know more about Google & its services in Pakistan & WorldWide, as a core team member I get a chance to access so many Google services for free. At this time my passion was turning into Professional Goals Achievements. </p>
            <p>When I’m not on my computer, I love traveling & adventure sports. Don’t just take my word for it as this is a digital world and I can show you a video. </p>
        </div>
      
      </ContentWrapper>
    </StyledServicesSection>
  );
};
