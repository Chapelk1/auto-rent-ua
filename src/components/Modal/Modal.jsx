import { createPortal } from 'react-dom';
import {
  BackDrop,
  Mod,
  Photo,
  Title,
  Accent,
  WrapDescr,
  Descr,
  Icon,
  DescriptionText,
  SubTitle,
  ConditionsList,
  ConditionsItem,
  ConditionsItemText,
  BtnClose,
  RentalButton,
  ConditionsAccent,
} from 'components/Modal/Modal.styled';
import { useEffect } from 'react';
import sprite from 'assets/icons.svg';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export function Modal({ onToggle, car, descriptionSecond, descriptionFirst }) {
  const {
    id,
    img,
    description,
    fuelConsumption,
    engineSize,
    type,
    make,
    model,
    year,
    rentalPrice,
    address,
    functionalities,
    accessories,
    rentalCompany,
    mileage,
    rentalConditions,
  } = car;

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    body.classList.add('hidden-scroll');

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      body.classList.remove('hidden-scroll');
    };
  }, [onToggle]);

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onToggle();
    }
  };

  const onClickBackDrop = e => {
    if (e.target === e.currentTarget) {
      onToggle();
    }
  };

  const adress = [...address.split(', ').slice(1, 3)];
  const normalizeRentalConditions = [...rentalConditions.split('\n')];
  const normalizeAge = Number(normalizeRentalConditions[0].split(' ').slice(2, 3));
 
  const normalizeMileage = (value) => {
    if (value >= 1000) {
      const num = value.toString()
      const numSlice = num.slice(1,99);
      return `${num[0]},${numSlice}`;
    }
    return value; 
  }
  console.log(normalizeAge);
  return createPortal(
    <BackDrop onClick={onClickBackDrop}>
      <Mod>
        <Photo src={img} />

        <Title>
          {`${make} `}

          <Accent>{`${model}`}</Accent>
          {`, ${year}`}
        </Title>

        <WrapDescr>
          <Descr>{adress[0]}</Descr>
          <Descr>{adress[1]}</Descr>
          <Descr>{`Id: ${id}`}</Descr>
          <Descr>{`Year: ${year}`}</Descr>
          <Descr>{`Type: ${type}`}</Descr>
          <Descr>{`Fuel Consumption: ${fuelConsumption}`}</Descr>
          <Descr>{`Engine Size: ${engineSize}`}</Descr>
        </WrapDescr>
        <DescriptionText>{description}</DescriptionText>

        <SubTitle>Accessories and functionalities:</SubTitle>
        <WrapDescr>
          {accessories.map(el => (
            <Descr>{el}</Descr>
          ))}
          {functionalities.map(el => (
            <Descr>{el}</Descr>
          ))}

          <Descr>{'desc'}</Descr>
        </WrapDescr>
        <SubTitle>Rental Conditions: </SubTitle>
        <ConditionsList>
          <ConditionsItem>
            <ConditionsItemText>
              {`Minimum age : `}
              <ConditionsAccent>{normalizeAge}</ConditionsAccent>
            </ConditionsItemText>
          </ConditionsItem>
          <ConditionsItem>
            <ConditionsItemText>Valid driver’s license</ConditionsItemText>
          </ConditionsItem>
          <ConditionsItem>
            <ConditionsItemText>
              {normalizeRentalConditions[2]}
            </ConditionsItemText>
          </ConditionsItem>
          <ConditionsItem>
            <ConditionsItemText>
              {`Mileage : `}
              <ConditionsAccent>{normalizeMileage(mileage)}</ConditionsAccent>
            </ConditionsItemText>
          </ConditionsItem>
          <ConditionsItem>
            <ConditionsItemText>
              {`Price : `}
              <ConditionsAccent>{rentalPrice}</ConditionsAccent>{' '}
            </ConditionsItemText>
          </ConditionsItem>
        </ConditionsList>

        <BtnClose>
          <Icon>
            <use href={sprite + '#icon-x-2'} />
          </Icon>
        </BtnClose>
        <RentalButton>Rental car</RentalButton>
      </Mod>
    </BackDrop>,
    modalRoot
  );
}
