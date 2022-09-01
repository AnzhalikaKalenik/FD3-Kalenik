import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext(''); //создали context(как будто глобальная переменная)

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    //SearchContext не компонент,компонент это Provider
    <div className="wrapper">
      {/* <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button> */}

      <SearchContext.Provider value={{searchValue, setSearchValue}}> 
        <Header/>
        <div className="content">
          {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          {/* </div> */}
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
