import { Item, HeartBtn } from './CarsItem.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, removeFavorites } from 'redux/favoritesSlice';
import { Modal } from 'components/Modal/Modal';
export const CarsItem = ({ car }) => {
  const cars = useSelector(state => state.favorites.entities);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
    const {
      id,
      img,
      description,
      make,
      model,
      year,
      rentalPrice,
      address,
      functionalities,
      accessories,
      rentalCompany,
      mileage,
    } = car;

  const onToggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  }
  
  const handlerFavoriteBtn = () => {
    dispatch(toggleFavorite(car));
  }
  
  
  const favoriteIcon = cars.find(car => car.id === id);
    
  return (
    <>
      <Item key={id}>
        <img src={img} alt={description} />
        <p>
          {make}
          <span>{model}</span>
          {year}
        </p>
        <p>{rentalPrice}</p>
        <p>{address}</p>
        <p>{mileage}</p>

        <HeartBtn color={favoriteIcon} onClick={handlerFavoriteBtn}>
          add
        </HeartBtn>
        <button onClick={onToggleModal}>Show Modal</button>
      </Item>
      {modalIsOpen && <Modal onToggle={onToggleModal} img={img} />}
    </>
  );
}

















