import styled from "styled-components";

export const ButtonLink = styled.a`
  border-radius: 50px;
  background: #c1393d;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #8f2b2e;
  }
`;

export const ButtonIconHolder = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;
