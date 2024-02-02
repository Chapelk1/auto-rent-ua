import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Mod = styled.div`
  position: relative;
  width: 540px;
  min-height: 752px;
  background-color: var(--text-color);
  border-radius: 24px;
  padding: 40px
`;

export const Photo = styled.img`
  border-radius: 14px;
  width: 460px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
`;



export const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`;
export const Accent = styled.span`
  color: var(--accent-text-color);
`;
export const WrapDescr = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  margin-bottom: 14px;
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
export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: var(--primary-text-color);
  margin-bottom: 24px;
`;
export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: black;
  stroke: black;
  
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`;

export const ConditionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionsItem = styled.div`
  padding: 7px 14px;
  background-color: var(--bg-color-descr);
  border-radius: 35px;
`;

export const ConditionsItemText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: var(--tertiary-text-color);
`;
export const ConditionsAccent = styled.span`
  font-weight: 600;
  color: var(--accent-text-color);
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  width: 18px;
  height: 18px;
`;



export const RentalButton = styled.a`
  padding: 12px 50px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--text-color);
  background-color: var(--primary-color-btn);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 250ms linear;
  :hover {
    background-color: var(--secondary-color-btn);
  }
`;