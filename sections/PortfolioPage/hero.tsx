import { styled } from '@config/stitches.config';

import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 2rem)`,
  paddingBottom: '5rem',
  backgroundColor: '$secondary50',
  borderBottom: '2px solid $border',

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)` },

  '> div': {
    '.hero-content': {
      width: '100%',
      maxWidth: '37.5rem',
      marginBottom: '2rem',

      h1: {
        color: '$primary900',
        marginBottom: '1.5rem',
      },
    },

    '.hero-interest': {
      color: '$subtext',
      fontSize: '$small',
      lineHeight: '$small',
      my: '2rem',
    },
  },
});

type HeroSectionProps = {
  openContactModal: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = props => {
  return (
    <StyledSection id="hero-section">
      <ContentWrapper>
        <div className="hero-content">
        <h1>Portfolio</h1>
          <h5>Projects & Website Developed by Sarmad Gardezi</h5>
          <p>
          On this page, you'll find all the projects related to Web Apps, Websites & SEO done by Sarmad Gardezi.
          </p>
        </div>
       
      </ContentWrapper>
    </StyledSection>
  );
};
