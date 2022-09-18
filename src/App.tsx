import { Provider } from 'react-redux';
import './App.css';
import BooksPage from './pages/booksPage/BooksPage';
import BookInfo from './pages/bookInfo/BookInfo';
import { FavoritesPage } from './pages/favoritesPage/FavoritesPage';
import About from './pages/About/About';
import Header from './components/header/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookInfo/:isbn" element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
