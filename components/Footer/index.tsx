import { SocialProfiles } from '@components/SocialProfiles';
import { footerNavigation } from '@config/navigation.config';
import { styled } from '@config/stitches.config';

import { ContentWrapper } from '../Layout';
import { NavigationMenu } from '../NavigationMenu';

const StyledFooter = styled('footer', {
  py: '1rem',
  backgroundColor: '$surface50',
  borderTop: '2px solid $border',

  '> div': {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    rowGap: '2rem',
    height: 'auto',
    minHeight: '100px',
    my: '1rem',

    '@md': {
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '100%',
      rowGap: 0,
      my: 0,
    },

    '> div:first-of-type': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      order: 1,

      '@md': {
        alignItems: 'flex-start',
        order: 'unset',
      },

      '.copyright': {
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '$mini',
        color: '$subtext',
      },
    },
  },
});

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <ContentWrapper>


<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Jumbotron component was launched! See what's new</span> 
            <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <form className="w-full max-w-md mx-auto">   
            <label for="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                </div>
                <input type="email" id="default-email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required></input>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
            </div>
        </form>
    </div>
    <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>

        
        <div>
          <SocialProfiles alignment="right" />
          <span className="copyright">
            © {new Date().getFullYear()} Sarmad Gardezi. All rights
            reserved.
          </span>
        </div>
        <NavigationMenu
          name="Footer Navigation"
          location="footer"
          items={footerNavigation}
        />
      </ContentWrapper>
    </StyledFooter>
  );
};
