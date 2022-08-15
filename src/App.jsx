import Pages from './pages/Pages';
import { Categories } from './components/Categories';
import { Search } from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}> Hungry</Logo>
      </Nav>
      <Search />
      <Categories />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;

const Nav = styled.nav`
padding 4rem 0rem
display: flex;
justify-content: flex-start;
align-items: center;
svg {
  font-size: 2rem;
}`;

export default App;
