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
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #cf484d;
    box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 20%),
      0 0px 0 1px rgb(0 0 0 / 2%);
    transform: scale(1.025);
  }
`;

export const ButtonIconHolder = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const DisabledButton = styled.div`
  border-radius: 50px;
  background: #c1393d;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: 0.5;
`;
