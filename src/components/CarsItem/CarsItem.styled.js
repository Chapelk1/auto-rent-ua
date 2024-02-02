import styled from "@emotion/styled";

export const Item = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Photo = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const WrapTitle= styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

export const WrapDescr = styled.div`
  display: flex;
  flex-wrap:wrap;
  column-gap: 6px;
  row-gap: 4px;
`;

export const CarDescr = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--secondary-text-color);
  padding-right: 6px;
  border-right: 1px solid var(--secondary-border-color);
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--primary-text-color);
`;
export const Accent = styled.span`
  color: var(--tertiary-text-color);
`;
export const HeartBtn = styled.button`
    background-color: ${(props) => {
  if (props.color) {
      return 'blue';
      }
    return 'white';
    }};
`;

export const LearnButton = styled.button`
  width: 100%;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--text-color);
  background-color: var(--primary-color-btn);
  padding: 12px 0;
  border: none;
  border-radius: 12px;
`;












