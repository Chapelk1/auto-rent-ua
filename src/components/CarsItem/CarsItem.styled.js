import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;

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
  
`;

export const WrapTitle= styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--primary-text-color);
`;
export const WrapDescr = styled.div`
  display: flex;
  flex-wrap:wrap;
  column-gap: 6px;
  row-gap: 4px;
`;

export const Descr = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--secondary-text-color);

  :not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid var(--secondary-border-color);
  }
`;

export const Accent = styled.span`
  color: var(--accent-text-color);
`;
export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  width: 18px;
  height: 18px;
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
  cursor: pointer;
  transition: background-color 250ms linear;
  :hover {
    background-color: var(--secondary-color-btn);
  }
`;

export const IconAdd = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${props => {
    if (props.color) {
      return 'var(--primary-color-btn)';
    }
    return 'transparent';
  }};
  stroke: ${props => {
    if (props.color) {
      return 'var(--primary-color-btn)';
    }
    return 'var(--text-color)';
  }};
  transition: fill 250ms linear, stroke 250ms linear, transform 250ms linear;

  :hover {
    transform: scale(0.95);
  }
`;










