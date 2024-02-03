import Select from 'react-select';
import {
  InputFirst,
  InputSecond,
  Form,
  SubmitBtn,
  Wrap,
  Placeholder,
  InputContainer,
  Label,
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
      <Wrap>
        <Select
          onChange={onChangeBrand}
          value={getBrandId()}
          options={initialBrand}
          classNamePrefix="custom-select"
          className="custom-select-container"
          placeholder="Enter the text"
        />
        <Label>Car brand</Label>
      </Wrap>
      <Wrap>
        <Select
          onChange={onChangePrice}
          value={getPriceId()}
          options={initialPrice}
          classNamePrefix="custom-select-second"
          className="custom-select-second-container"
          placeholder="To $"
        />
        <Label>Price/ 1 hour</Label>
      </Wrap>

      <InputContainer>
        <Wrap>
          <InputFirst
            type="number"
            min={0}
            name="from"
            pattern="[0-9]{1,7}"
            autoComplete="off"
          />
          <Label>Сar mileage / km</Label>
          <Placeholder>From</Placeholder>
        </Wrap>
        <Wrap>
          <InputSecond
            type="number"
            min={0}
            name="to"
            pattern="[0-9]{1,7}"
            autoComplete="off"
          />
          <Placeholder>To</Placeholder>
        </Wrap>
      </InputContainer>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};
