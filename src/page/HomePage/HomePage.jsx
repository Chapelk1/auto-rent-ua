import { Title, Accent } from './HomePage.styled';
import {Container} from 'components/SharedLayout/Layout.styled'
import homeImg from 'assets/fe4L-1.webp';


const HomePage = () => {


  return (
    <Container backgroundImage={homeImg}>
      <Title>
        Make your <Accent>DREAM</Accent> car come true.
      </Title>
    </Container>
  );
}


export default HomePage;