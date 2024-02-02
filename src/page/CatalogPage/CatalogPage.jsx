import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { LoadMoreBtn } from 'components/LoadMore/LoadMore';
import { Filters } from 'components/Filters/Filters';
import { CarsList } from 'components/CarsList/CarsList';
import { fetchCars } from 'redux/operationsCars';
import {removePage} from 'redux/carsSlice'
const initialBrand = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'Buick',
    label: 'Buick',
  },
  {
    value: 'Volvo',
    label: 'Volvo',
  },
  {
    value: 'HUMMER',
    label: 'HUMMER',
  },
  {
    value: 'Subaru',
    label: 'Subaru',
  },
  {
    value: 'Mitsubishi',
    label: 'Mitsubishi',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Lincoln',
    label: 'Lincoln',
  },
  {
    value: 'GMC',
    label: 'GMC',
  },
  {
    value: 'Hyundai',
    label: 'Hyundai',
  },
  {
    value: 'MINI',
    label: 'MINI',
  },
  {
    value: 'Bentley',
    label: 'Bentley',
  },
  {
    value: 'Mercedes-Benz',
    label: 'Mercedes-Benz',
  },
  {
    value: 'Aston Martin',
    label: 'Aston Martin',
  },
  {
    value: 'Pontiac',
    label: 'Pontiac',
  },
  {
    value: 'Lamborghini',
    label: 'Lamborghini',
  },
  {
    value: 'Audi',
    label: 'Audi',
  },
  {
    value: 'BMW',
    label: 'BMW',
  },
  {
    value: 'Chevrolet',
    label: 'Chevrolet',
  },
  {
    value: 'Chrysler',
    label: 'Chrysler',
  },
  {
    value: 'Kia',
    label: 'Kia',
  },
  {
    value: 'Land',
    label: 'Land',
  },
];

const initialPrice = [
  {
    value: '',
    label: 'All',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '40',
    label: '40',
  },
  {
    value: '50',
    label: '50',
  },
  {
    value: '60',
    label: '60',
  },
  {
    value: '70',
    label: '70',
  },
  {
    value: '80',
    label: '80',
  },
  {
    value: '90',
    label: '90',
  },
  {
    value: '100',
    label: '100',
  },
  {
    value: '110',
    label: '110',
  },
  {
    value: '120',
    label: '120',
  },
  {
    value: '130',
    label: '130',
  },
  {
    value: '140',
    label: '140',
  },
  {
    value: '150',
    label: '150',
  },
  {
    value: '160',
    label: '160',
  },
  {
    value: '170',
    label: '170',
  },
  {
    value: '180',
    label: '180',
  },
  {
    value: '190',
    label: '190',
  },
  {
    value: '200',
    label: '200',
  },
  {
    value: '210',
    label: '210',
  },
  {
    value: '220',
    label: '220',
  },
  {
    value: '230',
    label: '230',
  },
  {
    value: '240',
    label: '240',
  },
  {
    value: '250',
    label: '250',
  },
  {
    value: '260',
    label: '260',
  },
  {
    value: '270',
    label: '270',
  },
  {
    value: '280',
    label: '280',
  },
  {
    value: '290',
    label: '290',
  },
  {
    value: '300',
    label: '300',
  },
  {
    value: '310',
    label: '310',
  },
  {
    value: '320',
    label: '320',
  },
  {
    value: '330',
    label: '330',
  },
  {
    value: '340',
    label: '340',
  },
  {
    value: '350',
    label: '350',
  },
];

const CatalogPage = () => {
  const cars = useSelector(state => state.cars.entities);
  const page = useSelector(state => state.cars.page);
  const noFound = useSelector(state => state.cars.noFound);
  const isLoading = useSelector(state => state.cars.isLoading)
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(
      fetchCars({
        limit: 12,
        page: 1,
      })
    );
  }, [dispatch]);

  const onChangeBrand = brand => {
    setBrand(brand.value);
  };

  const getBrandId = () => {
    return brand ? initialBrand.find(brand => brand.value === brand) : '';
  };

  const onChangePrice = price => {
    setPrice(price.value);
  };

  const getPriceId = () => {
    return price
      ? initialPrice.find(priceValue => priceValue.value === price)
      : '';
  };

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(removePage());
    dispatch(
      fetchCars({
        limit: 12,
        page: 1,
        make: brand,
      })
    );
  };

  const filteredCars = () => {
    return cars;
  };

  const fetchLoadMore = () => {
    if (noFound) {
      dispatch(
        fetchCars({
          limit: 12,
          page,
          make: brand,
        })
      );
    }
  
  }

  return (
    <>
      <Filters
        handlerSubmit={handlerSubmit}
        onChangeBrand={onChangeBrand}
        getBrandId={getBrandId}
        onChangePrice={onChangePrice}
        getPriceId={getPriceId}
        initialBrand={initialBrand}
        initialPrice={initialPrice}
      />
      <CarsList cars={filteredCars()} />
      {(noFound && !isLoading) && <LoadMoreBtn loadMore={fetchLoadMore} />}
    </>
  );
};

export default CatalogPage;
