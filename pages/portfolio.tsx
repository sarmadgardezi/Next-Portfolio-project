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
  import { XMarkIcon } from '@heroicons/react/20/solid'
  
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
    <>
     <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <path
          id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
          fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
          fillOpacity=".3"
          d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
        />
        <defs>
          <linearGradient
            id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
            x1="614.778"
            x2="-42.453"
            y1="26.617"
            y2="96.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
      </svg>
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
        <Link href={link} isExternal={true}></Link>
          <Img
            src={cover}
            objectFit="cover"
            width="100%"
            height="100%"
            overflow="hidden"
          />
        </Box>
        <Box p={4}>
        
          <Heading color={'black'} fontSize={'16px'} noOfLines={1}>
          {title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {excerpt}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'12px'} fontWeight={'semibold'}>
             {link}
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            >
              <BsHeart fontSize={'24px'} />
           
          </Flex>
        </HStack>
      </Box>
</>
    )
  }
  
  const Bookmarks = ({bookmarks}) => {
  
      return (
        <>
         <HeroSection openContactModal={() => setIsModalOpen(true)} />
        <ContactSectionSection id="contact-section">
              {bookmarks !== null && bookmarks.length > 0
                  ?
                  <SimpleGrid alignItems="stretch"
                  gap={12}
                  w="full"
                  columns={[1, 6]} spacing={4} mt={6}>
                 
                      {bookmarks.map((b) => (
                          <GridItem key={b.link} as="article">
                          <BookmarkItem {...b}/>
                          </GridItem>
                      ))}
                
              
                  </SimpleGrid>
  
                  : <Text>Favoritos não encontrados.</Text>}
      
          
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