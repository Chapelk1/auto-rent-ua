import styled from "@emotion/styled";

export const Item = styled.li`
  width: 300px;
`;

export const HeartBtn = styled.button`
    background-color: ${(props) => {
  if (props.color) {
      return 'blue';
      }
    return 'white';
    }};
`;














