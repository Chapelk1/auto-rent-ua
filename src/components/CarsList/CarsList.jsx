
import {CarsItem} from 'components/CarsItem/CarsItem'
import { List } from './CarsList.styled'



export const CarsList = ({cars}) => {
  
  

  return (
    <>
      <List>
        {cars.length > 0 && cars.map(car => (
          <CarsItem key={car.id} car={car} />
        ))}
      </List>
    </>
  );
}