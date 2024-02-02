
import Select from 'react-select';
import {
  InputFirst,
  InputSecond,
  Form,
  SubmitBtn,
  WrapInput,
  Placeholder,
  InputContainer,
} from './Filters.styled';




export const Filters = ({
  handlerSubmit,
  onChangeBrand,
  getBrandId,
  onChangePrice,
  getPriceId,
  initialBrand,
  initialPrice,
}) => {
  return (
    <Form onSubmit={handlerSubmit}>
      <Select
        onChange={onChangeBrand}
        value={getBrandId()}
        options={initialBrand}
        classNamePrefix="custom-select"
        className="custom-select-container"
        placeholder="Enter the text"
      />
      <Select
        onChange={onChangePrice}
        value={getPriceId()}
        options={initialPrice}
        classNamePrefix="custom-select-second"
        className="custom-select-second-container"
        placeholder="To $"
      />
      <InputContainer>
        <WrapInput>
          <InputFirst
            type="number"
            min={0}
            name="from"
            pattern="[0-9]{1,7}"
            autoComplete="off"
          />
          <Placeholder>From</Placeholder>
        </WrapInput>
        <WrapInput>
          <InputSecond
            type="number"
            min={0}
            name="to"
            pattern="[0-9]{1,7}"
            autoComplete="off"
          />
          <Placeholder>To</Placeholder>
        </WrapInput>
      </InputContainer>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};





