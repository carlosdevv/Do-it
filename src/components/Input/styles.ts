import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  height: 4rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid transparent;

  background: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${(props) => props.theme.colors.primaryDark};
    `}

  svg {
    color: #41414d;

    ${(props) =>
      props.isFocused &&
      css`
        color: ${(props) => props.theme.colors.primaryDark};
      `}
  }

  input {
    border: none;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 21px;
    width: 100%;
    height: 100%;
    transition: border-color 0.2s;
    color: #fff;
    outline: none;
    padding: 12px 20px 12px 15px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.background};
  }
`;
