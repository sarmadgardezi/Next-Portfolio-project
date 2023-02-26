import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ContentWrapper } from '@components/Layout';
import { volunteering } from "../../lib/data/volunteering";

import VolunteerCard from "./VolunteerCard";

const VolunteerExperienceWrapper = styled(Box)`
  margin: 5% auto;
  margin-bottom: 22px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 9px;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function VolunteerExperience() {
  return (
    <ContentWrapper className="content">
    <VolunteerExperienceWrapper marginBottom={5} marginTop="1%">
      <Heading size="lg" mb={5}>
        Volunteer Experience
      </Heading>

      <StyledGrid>
        {volunteering.map((item) => (
          <VolunteerCard
            key={item.org}
            por={item.por}
            org={item.org}
            icon={item.icon}
        
          />
        ))}
      </StyledGrid>
    </VolunteerExperienceWrapper>
</ContentWrapper>
  );
}

export default VolunteerExperience;