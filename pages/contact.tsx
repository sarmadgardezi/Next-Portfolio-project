import type { NextPage } from 'next';

import { LegalContentWrapper } from '@components/Layout';
import { getEmailAddress } from '@utils/getEmailAddress';
import { socialProfiles } from '@config/profiles.config';
import { NextSeo, OrganizationJsonLd, OrganizationJsonLdProps } from 'next-seo';
import { generateSeoProps } from '@config/seo.config';
import { getBaseUrl } from '@utils/getBaseUrl';

const baseUrl = getBaseUrl();
const seoProps = generateSeoProps({
  url: `${baseUrl}/contact`,
  title: 'Contact | Sarmad Gardezi',
});

const jsonLdProps: OrganizationJsonLdProps = {
    type: 'Corporation',
    name: 'Sarmad Gardezi',
    url: `${baseUrl}/contact`,
    logo: `${baseUrl}/images/logo-k.png`,
    contactPoints: [
      {
        contactType: 'Inquiries & Support',
        email: getEmailAddress(socialProfiles),
        availableLanguage: ['English', 'German'],
      },
    ],
    makesOffer: [
      {
        itemOffered: {
          name: 'About | Sarmad Gardezi',
          description:
            'I am a freelance web / product developer with over 5 years of experience and a background in Freelancing.',
        },
      },
    ],
  };
const Contact: NextPage = () => {
  const email = getEmailAddress(socialProfiles);
  return (
    <>
      <NextSeo {...seoProps} />
    <LegalContentWrapper>
    <p>Contact Me for more information</p>
    <p>Email: mail@sarmadgardezi.com</p>
    </LegalContentWrapper>
    </>
  );
}; 

export default Contact;
