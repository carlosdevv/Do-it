import styled from "styled-components";

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const CurrentExperienceBar = styled.span`
  position: absolute;
  top: 12px;
  transform: translate(-50%);
`;
