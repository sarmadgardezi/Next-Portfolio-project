import {
    Box,
    Image,
    Flex,
    Text,
    Heading,
    useColorMode,
  } from "@chakra-ui/react";
  import styled from "@emotion/styled";
  

  const Wrapper = styled(Box)`
    margin: 0 auto;
    width: 270px;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 600px) {
      width: 95%;
    }
  `;
  
  type VolunteeringProps = {
    por: string;
    org: string;
    icon: string;

  };
  
  function VolunteerCard({ por, org, icon }: VolunteeringProps) {
    const { colorMode } = useColorMode();
  
    return (
      <Wrapper
        style={
          colorMode === "dark"
            ? { backgroundColor: "#22223B" }
            : { backgroundColor: "#ECF0FE" }
        }
      >
          <Flex justifyContent="flex-start" alignItems="center">
            <Image
              mr={[5, 3]}
              objectFit="cover"
              boxSize="30px"
              marginRight="6px"
              alt={por}
              src={icon}
            />
            <div>
              <Heading as='h6'>{por}</Heading>
              <Text fontSize="12px">{org}</Text>
            </div>
          </Flex>
     
      </Wrapper>
    );
  }
  
  export default VolunteerCard;