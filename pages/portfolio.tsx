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
  LinkBox,
  Tooltip,
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
    
      <LinkBox as="article">

      <Tooltip label={excerpt}>       
       <VStack   alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          overflow="hidden"
          bg="gray.50"
          _hover={{ transform: 'scale(1.05, 1.05)' }}
          _dark={{
            bg: 'whiteAlpha.100',
          }}
          rounded="md"
          spacing={0}
          transitionDuration="slow"
          transitionProperty="transform"
          transitionTimingFunction="ease-out"
       >
       <AspectRatio w="full" ratio={16 / 9}>
            <Image
              alt={`Thumbnail of ${title}`}
              fallback={<Skeleton w="full" h="full" />}
              src={imgurl} objectFit='cover'
            />
          </AspectRatio>
          <VStack alignItems="flex-start" flex={1} w="full" p={3} spacing={1}>
            <LinkOverlay w="full" href={wurl} isExternal>
              <Heading noOfLines={1} size="xs">
                {title}
              </Heading>
            </LinkOverlay>
            <Text color="gray.500" fontSize="xs" textTransform="capitalize">
              {tags}
            </Text>
          </VStack>
          
        </VStack>
        </Tooltip>
  
    </LinkBox>

    )
  }
  
  const Bookmarks = ({bookmarks}) => {
  
      return (
        <>
         <HeroSection openContactModal={() => setIsModalOpen(true)} />
         <VStack spacing={16} flex={1} w="full" as="main">
              {bookmarks !== null && bookmarks.length > 0
                  ?
                  <SimpleGrid
                  as="section"
                  alignItems="stretch"
                  gap={12}
                  w="full"
                  columns={{ base: 1, sm: 2, md: 3 }}
                >
                 
                      {bookmarks.map((b) => (
                          <GridItem key={b.link} as="article">
                          <BookmarkItem {...b}/>
                          </GridItem>
                      ))}
                
              
                  </SimpleGrid>
  
                  : <Text>Favoritos não encontrados.</Text>}
      
          
          </VStack>
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