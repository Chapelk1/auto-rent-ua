
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, removeFavorites } from 'redux/favoritesSlice';
import { Modal } from 'components/Modal/Modal';
import sprite from 'assets/icons.svg';

import {
  Item,
  HeartBtn,
  Photo,
  WrapTitle,
  Title,
  Accent,
  WrapDescr,
  Descr,
  LearnButton,
  IconAdd,
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

            <Accent>{`${model}`}</Accent>
            {`, ${year}`}
          </Title>
          <Title>{rentalPrice}</Title>
        </WrapTitle>
        <WrapDescr>
          {descriptionFirst.map(desc => (
            <Descr>{desc}</Descr>
          ))}
          {descriptionSecond.map(desc => (
            <Descr>{desc}</Descr>
          ))}
        </WrapDescr>

        <HeartBtn onClick={handlerFavoriteBtn}>
          <IconAdd color={favoriteIcon}>
            <use href={sprite + '#icon-heart-2'} />
          </IconAdd>
        </HeartBtn>
        <LearnButton onClick={onToggleModal}>Learn more</LearnButton>
      </Item>
      {modalIsOpen && (
        <Modal
          onToggle={onToggleModal}
          car={car}
          descriptionFirst={descriptionFirst}
          descriptionSecond={descriptionSecond}
        />
      )}
    </>
  );
}

















