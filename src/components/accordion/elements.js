import styled from "styled-components";

export const AccordionContainer = styled.div`
  max-width: 720px;
  margin: 48px auto;
  @media screen and (max-width: 816px) {
    width: 90%;
  }
  color: var(--makerspace-accordion-title);
`;

export const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: var(--makerspace-red);
  padding: 1rem;
`;

export const AccordionContent = styled.div`
  background-color: var(--makerspace-background-secondary);
  padding: 1rem;
`;
