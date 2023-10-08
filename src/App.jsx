import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Signup from './pages/Signup';
import Login from './pages/Login';

import FestivalProduct from './pages/FestivalProduct';
import FestivalDetail from './pages/FestivalDetail';

import OitaProduct from './pages/OitaProduct';
import OitaDetail from './pages/OitaDetail';

import Cart from './pages/Cart';
import WishList from './pages/WishList';

import MainPage from './pages/MainPage';

function App() {
    return (
        <div className="app">
            <div className="header-body fixed top-0 left-0 right-0 shadow-set bg-white z-50">
                <Header />
            </div>
            <div className="headerUnder">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/festivalProduct" element={<FestivalProduct />} />
                    <Route path="/festivalDetail/:id" element={<FestivalDetail />} />
                    <Route path="/oitaProduct" element={<OitaProduct />} />
                    <Route path="/oitaDetail/:id" element={<OitaDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishList" element={<WishList />} />
                </Routes>
            </div>
            <div className="footer-body relative left-0 right-0 bottom-0 shadow-md bg-set-dark-blue">
                <Footer />
            </div>
        </div>
    );
}

export default App;
