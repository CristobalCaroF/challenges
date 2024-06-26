import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ AllLightsOn, AllLightsOff }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={AllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={AllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
