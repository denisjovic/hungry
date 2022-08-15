import { useState } from 'react';
import Pages from './pages/Pages';
import { Categories } from './components/Categories';
import { Search } from './components/Search';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/cuisine/:cuisine' element={<Cuisine />} />
        <Route path='/' element={<Pages />} />
      </Routes> */}
      <Search />
      <Categories />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
