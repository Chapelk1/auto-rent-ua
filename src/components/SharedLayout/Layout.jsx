import {  Outlet } from 'react-router-dom';
import { Container, Header, Navigate, Link } from './Layout.styled';
export const Layout = () => {
    return (
      <>
        <Header>
          <Navigate>
            <Link to="/">Home</Link>
            <Link to="catalog">Catalog</Link>
            <Link to="favorites">Favorites</Link>
          </Navigate>
        </Header>
        <Container>
          <Outlet />
        </Container>
      </>
    );
    
        
}



