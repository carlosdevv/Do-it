import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100vh;
  width: 6.25rem;
  padding: 1.8rem 1.5rem;

  background: ${(props) => props.theme.colors.backgroundMenu};
  border-radius: 2px;
`;

export const MenuItens = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 18rem;

  text-decoration: none;

  ul {
    li {
      margin-bottom: 2rem;

      text-decoration: none;
      list-style: none;

      transform: color 0.2s ease;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        cursor: pointer;
      }

      &:focus {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
