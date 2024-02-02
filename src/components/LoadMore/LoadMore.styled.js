import styled from "@emotion/styled";



export const LoadBtn = styled.button`
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-color-btn);
  border: none;
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms linear;
  :hover {
    color: var(--secondary-color-btn);
  }
`;