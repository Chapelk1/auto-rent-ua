
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, removeFavorites } from 'redux/favoritesSlice';
import { Modal } from 'components/Modal/Modal';

import {
  Item,
  HeartBtn,
  Photo,
  WrapTitle,
  Title,
  Accent,
  WrapDescr,
  CarDescr,
  LearnButton,
} from './CarsItem.styled';

export const CarsItem = ({ car }) => {
  const cars = useSelector(state => state.favorites.entities);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
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

  const onToggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  }
  
  const handlerFavoriteBtn = () => {
    dispatch(toggleFavorite(car));
  }

  const favoriteIcon = cars.find(car => car.id === id);

  const descriptionFirst = [
    ...address.split(', ').slice(1, 3),
    rentalCompany,
  ];
  const descriptionSecond = [
    type,
    model,
    id,
    engineSize,
  ];

  return (
    <>
      <Item key={id}>
        <Photo src={img} alt={description} />
        <WrapTitle>
          <Title>
            {`${make} `}

            <Accent>{`${model}, `}</Accent>
            {year}
          </Title>
          <Title>{rentalPrice}</Title>
        </WrapTitle>
        <WrapDescr>
          {descriptionFirst.map(desc => <CarDescr>{desc}</CarDescr>)}
          {descriptionSecond.map(desc => <CarDescr>{desc}</CarDescr>)}
        </WrapDescr>

        <HeartBtn color={favoriteIcon} onClick={handlerFavoriteBtn}>
          add
        </HeartBtn>
        <LearnButton onClick={onToggleModal}>Learn more</LearnButton>
      </Item>
      {modalIsOpen && <Modal onToggle={onToggleModal} img={img} />}
    </>
  );
}

















