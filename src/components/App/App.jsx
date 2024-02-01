
import { Routes, Route, Link } from "react-router-dom"
import HomePage from "page/HomePage/HomePage";
import CatalogPage from 'page/CatalogPage/CatalogPage';
import FavoritesPage from "page/FavoritesPage/FavoritesPage";
import {Layout} from 'components/SharedLayout/Layout'

export const App = () => {
    


    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </>
    );
}
