import {  Outlet } from 'react-router-dom';
import { Section, Header, Navigate, Link } from './Layout.styled';
export const Layout = () => {
    return (
      <Section>
        <Header>
          <Navigate>
            <Link to="/">Home</Link>
            <Link to="catalog">Catalog</Link>
            <Link to="favorites">Favorites</Link>
          </Navigate>
        </Header>
        <Outlet />
      </Section>
    );
    
        
}



