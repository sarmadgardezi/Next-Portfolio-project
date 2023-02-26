import type { NextPage } from 'next';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { ContactSection } from '../sections/ServicesPage/Contact';
import { HeroSection } from '../sections/FaqsPage/Hero';
import  FaqsSection   from '../sections/FaqsPage/FaqsSection';
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
        <title key="title">FAQ&#39;s {titleSuffix}</title>
			</Head>
      <NextSeo {...seoProps} />
      <HeroSection openContactModal={() => setIsModalOpen(true)} />
        <FaqsSection/>
      <ContactSection openContactModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ServicesPage;
