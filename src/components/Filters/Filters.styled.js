import styled from "@emotion/styled";




export const Form = styled.form`
  margin-bottom: 50px;
  display: flex;
  gap: 18px;
  justify-content: center;
`; 

export const InputFirst = styled.input`
  width: 160px;
  border: none;
  background: var(--select-bg);
  outline: none;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding: 14px 14px 14px 70px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`; 

export const InputSecond = styled.input`
  width: 160px;
  border: none;
  background: var(--select-bg);
  outline: none;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);

  border-radius: 0 14px 14px 0;
  padding: 14px 14px 14px 50px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    
  }
`; 
export const InputContainer = styled.div`
  display: flex;
`
export const WrapInput = styled.div`
  position: relative;
`;
export const Placeholder = styled.p`
  position: absolute;
  top: 14px;
  left: 24px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primary-text-color);
`;

export const SubmitBtn = styled.button`
  padding: 14px 44px;
  background-color: var(--primary-color-btn);
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--text-color);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms linear;
  :hover {
    background-color: var(--secondary-color-btn);
  }
`;












