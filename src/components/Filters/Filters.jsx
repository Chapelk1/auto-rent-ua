
import Select from 'react-select';
import { Input, Form, SubmitBtn } from './Filters.styled';




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
        placeholder="Categories"
      />
      <Select
        onChange={onChangePrice}
        value={getPriceId()}
        options={initialPrice}
        classNamePrefix="custom-select"
        className="custom-select-container"
        placeholder="Categories"
      />
      <Input
        type="text"
        name="from"
        pattern="[0-9]{1,5}"
        placeholder="From"
        autoComplete="off"
      />
      <Input
        type="text"
        name="to"
        pattern="[0-9]{1,5}"
        placeholder="To"
        autoComplete="off"
      />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};





