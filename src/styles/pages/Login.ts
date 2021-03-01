import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 5rem;

  font-family: "Roboto", sans-serif;

  background: #09090a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SectionContainer = styled.section`
  max-width: 1140px;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-family: "Nunito", sans-serif;
  }

  p {
    max-width: 80%;
    font-weight: 300;
    font-size: 1.1rem;

    font-family: "Poppins", sans-serif;

    color: ${(props) => props.theme.colors.grayLine};
    opacity: 0.5;
  }

  > strong {
    font-size: 2rem;
    margin-top: 6.25rem;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-left: 8rem;
    width: 20rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 5px;
  color: ${(props) => props.theme.colors.grayLine};

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.2rem;

    svg {
      cursor: pointer;

      color: ${(props) => props.theme.colors.grayLine};
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }

    div {
      margin-left: 0.5rem;
      line-height: 35px;
      font-size: 1.5rem;

      color: ${(props) => props.theme.colors.grayLine};

      span {
        font-weight: 700;
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0;

  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.backgroundMenu};

  strong {
    font-size: 2rem;
    line-height: 40px;
  }

  > p {
    color: ${(props) => props.theme.colors.grayLine};
  }
`;

export const Form = styled.div`
  width: 31rem;

  grid-gap: 1rem;
  gap: 1rem;
  display: grid;
  padding: 1.5rem 2.5rem;
  grid-template-columns: repeat(1, 1fr);

  font-family: "Roboto", sans-serif;
`;

export const LoginButton = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    border: 0;
    width: 100%;
    height: 4rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 21px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    background: ${(props) => props.theme.colors.primaryDark};
    text-transform: uppercase;
    transform-style: preserve-3d;
    transition: all 175ms linear;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const LineDivider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
`;

export const InfoContent = styled.div`
  display: flex;
  margin: 2rem 0;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.theme.colors.grayLine};

  .first-child {
    display: flex;
    margin-right: 2.5rem;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
    span {
      margin-left: 1rem;
    }
  }

  .second-child {
    display: flex;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
    span {
      margin-left: 1rem;
    }
  }
`;
