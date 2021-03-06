import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; // always keep centered

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #000000;
    background: var(--secondary);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
