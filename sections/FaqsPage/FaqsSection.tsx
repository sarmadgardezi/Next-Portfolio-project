import { keyframes, styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Box, SimpleGrid, Icon, Text, Stack} from '@chakra-ui/react';
import { FcDonate, FcInTransit } from 'react-icons/fc';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import { ReactElement } from 'react';
import { FAQPageJsonLd } from 'next-seo';
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

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, }: FeatureProps) => {
  return (
    <>

    <Stack>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
    </>
  );
};
export default function SimpleThreeColumns() {
  return (
    <StyledServicesSection id="services-section">
      <ContentWrapper>
      <Box p={4}>
    
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
    <FAQPageJsonLd
      mainEntity={[
        {
          questionName: 'How long is the delivery time?',
          acceptedAnswerText: '3-5 business days.',
        },
        {
          questionName: 'Where can I find information about product recalls?',
          acceptedAnswerText: 'Read more on under information.',
        },
      ]}
    />
      <Feature
        icon={<Icon as={IoPersonRemoveOutline} w={10} h={10} />}
        title={'Q: Who is Sarmad Gardezi ?'}
        text={
          'Sarmad Gardezi is a Professional UX UI Developer from islamabad Pakistan. From last 7 Years he is a blogger online & build more then 100+ website projects for the client as a freelancer. Currently working with Google Cloud Islamabad.'
        }
      />
      <Feature
        icon={<Icon as={FcDonate} w={10} h={10} />}
        title={'Q: Does Sarmad Gardezi is Google Certified?'}
        text={
          'Sarmad Gardezi Started blogging as a student now his articles is famous over the world. He also worked with ProPakistani & TechJuice as a Content Writer.'
        }
      />
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={'Q: How does Sarmad Gardezi started Blogging?'}
        text={
          'Sarmad Gardezi Started blogging as a student now his articles is famous over the world. He also worked with ProPakistani & TechJuice as a Content Writer.'
        }
      />
      
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={'Q: How much you charge for a blog website?'}
        text={
          'I helps student to start their own blog from scratch. My rates are very low and i also teach them how to earn online using google adsense.'
        }
      />
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={'Q: How Sarmad Gardezi Earn Online?'}
        text={
          'Sarmad is curently earning from Google Adsense, Taking freelance projects & hes level 1 seller at Upwork as a Full Stack developer. He use the mediums UpWork Google Adsense turingcom'
        }
      />
      
    </SimpleGrid>
  </Box>
      
      </ContentWrapper>
    </StyledServicesSection>
  );
};
