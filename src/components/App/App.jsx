
import { Routes, Route, Link } from "react-router-dom"
import HomePage from "page/HomePage/HomePage";
import CarPage from "page/AutoPage/CarPage";
import FavoritesPage from "page/FavoritesPage/FavoritesPage";
import {Layout} from 'components/SharedLayout/Layout'

export const App = () => {
    


    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CarPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </>
    );
}
