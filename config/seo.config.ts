import { getBaseUrl } from '@utils/getBaseUrl';
import type { NextSeoProps } from 'next-seo';
import type { OpenGraphArticle } from 'next-seo/lib/types';
import { TwitterHandle } from './profiles.config';

const baseUrl = getBaseUrl();

type SeoPropsBuilderInput = {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: OpenGraphArticle;
};

export const generateSeoProps = (
  input: SeoPropsBuilderInput
): NextSeoProps => ({
  canonical: input.url,
  title: input.title,
  description: input.description,
  twitter: {
    cardType: 'summary_large_image',
    handle: TwitterHandle,
  },
  openGraph: {
    url: input.url,
    title: input.title,
    description: input.description,
    type: input.type ?? 'website',
    site_name: 'Sarmad Gardezi',
    article: input.article,
    profile: {
      firstName: 'Sarmad',
      lastName: 'Gardezi',
      username: 'sarmadgardezi',
    },
  },
});

export const defaultSeoProps = generateSeoProps({
  title: 'Sarmad Gardezi – A Full Stack Developer',
  description:
    'React, Gastby, WordPress Developer, tech enthusiast and entrepreneur from Islamabad, Pakistan.',
  url: baseUrl,
  image: `${baseUrl}/default-og-image.png`,
});
