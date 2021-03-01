import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grayLine};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) => props.theme.colors.backgroundMenu};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 2px solid ${(props) => props.theme.colors.grayLine};
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => props.theme.colors.primary};
  color: #fff;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  svg {
    margin-top: 0.1rem;
    margin-left: 0.5rem;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  &:disabled {
    background: #fff;
    color: ${(props) => props.theme.colors.textDark};
    cursor: not-allowed;
    border-bottom: 3px solid ${(props) => props.theme.colors.primaryDark};

    svg {
      color: ${(props) => props.theme.colors.green};
    }
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => props.theme.colors.grayLine};
  color: ${(props) => props.theme.colors.textDark};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  svg {
    margin-top: 0.1rem;
    margin-left: 0.5rem;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.red};
    color: #fff;
  }
`;
