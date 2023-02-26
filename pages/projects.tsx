import type { NextPage } from 'next';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { ContactSection } from '../sections/ServicesPage/Contact';
import { HeroSection } from '../sections/ProjectSection/Hero';
import { ContactModal } from '@components/Modal';
import { generateSeoProps } from '@config/seo.config';
import { getBaseUrl } from '@utils/getBaseUrl';
import Head from 'next/head';
import metadata from '../components/Layout/metadata.json';


const baseUrl = getBaseUrl();

const seoProps = generateSeoProps({
  url: `${baseUrl}/faqs`,
 
});


const ServicesPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {titleSuffix } = metadata
  return (
    <>
     <Head>
        <title key="title">Projects{titleSuffix}</title>
			</Head>
      <NextSeo {...seoProps} />
      <HeroSection openContactModal={() => setIsModalOpen(true)} />
     
      <ContactSection openContactModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ServicesPage;
