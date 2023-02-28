import {
  Box,
  Heading, 
  Image, 
  Link, 
  Grid, 
  Skeleton, 
  Tag, 
  Text, 
  VStack,  
  GridItem,
  useColorModeValue,
  HStack,
  Flex,
  Center,
  Img,
  SimpleGrid,

  useColorModeValue as mode} from "@chakra-ui/react"; 
  import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
  import { HeroSection } from '../sections/PortfolioPage/hero';
  import { styled } from '@config/stitches.config';
  import { motion } from 'framer-motion';
  
  const ContactSectionSection = styled('section', {
    '> div': {
      marginBottom: '6rem',
  
      '.contact-content': {
        maxWidth: '42rem',
        paddingTop: '3rem',
        borderTop: '2px dashed $surface100',
  
        '.subtitle': {
          color: '$subtext',
          marginTop: '1rem',
          marginBottom: '3rem',
        },
      },
  
      '.contact-details': {
        '.contact-button': {
          display: 'flex',
          flexDirection: 'column-reverse',
          flexWrap: 'wrap',
          columnGap: '4rem',
          rowGap: '3rem',
          marginBottom: '1rem',
  
          '@sm': { flexDirection: 'row' },
  
          '> button': {
            width: 220,
          },
  
          '.contact-person': {
            display: 'flex',
            columnGap: '0.5rem',
            alignItems: 'center',
            color: '$primary900',
            fontWeight: 500,
  
            span: {
              display: 'block',
              color: '$subtext',
              fontWeight: 400,
              fontSize: '$small',
            },
          },
        },
      },
    },
  });
  
  
  const BookmarkItem = ({title,  excerpt, cover, type, link, created, tags}) => {
  
    return (
      <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href={link} 
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Link href={link} isExternal={true}></Link>
						<Image
						src={cover}
							className="rounded-t-xl border-none"
							
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{excerpt}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>

    )
  }
  
  const Bookmarks = ({bookmarks}) => {
  
      return (
        <>
         <HeroSection openContactModal={() => setIsModalOpen(true)} />
         
        <ContactSectionSection id="contact-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
              {bookmarks !== null && bookmarks.length > 0
                  ?
                  <GridItem key={b.link} as="article">
                 
                      {bookmarks.map((b) => (
                         
                          <BookmarkItem {...b}/>
                         
                      ))}
                
              
                  </div>
  
                  : <Text>Favoritos não encontrados.</Text>}
      </div>
          
          </ContactSectionSection>
          </>
      )
  }
  
  
  export const getStaticProps = async context => {
      const url = `https://api.raindrop.io/rest/v1/raindrops/0`;
  
      const res = await fetch(url, {
          method: "get",
          headers: new Headers({
              Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
              "Content-Type": "application/x-www-form-urlencoded",
          }),
      });
  
      const bookmarks = await res.json();
  
      if (!bookmarks) {
          return {
              notFound: true,
          };
      }
  
      return {
          props: {
              bookmarks: bookmarks.items,
          },
          revalidate: 1,
      }
  }
  
  export default Bookmarks;