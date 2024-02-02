import { useSelector } from 'react-redux';
import { CarsList } from "components/CarsList/CarsList";
import { ContainerSecond } from 'components/SharedLayout/Layout.styled';



const FavoritesPage = () => {
const cars = useSelector(state => state.favorites.entities);

  return (
    <ContainerSecond>
      <CarsList cars={cars} />
    </ContainerSecond>
  );
};

export default FavoritesPage;
