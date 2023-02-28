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