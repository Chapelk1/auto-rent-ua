import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import CatalogPage from 'page/CatalogPage/CatalogPage';
import FavoritesPage from 'page/FavoritesPage/FavoritesPage';
import { Layout } from 'components/SharedLayout/Layout';

export const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
