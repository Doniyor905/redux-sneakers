import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useDispatch } from 'react-redux';
import { fetchCart } from './redux/slices/cartSlice';
import { fetchFavorites } from './redux/slices/favoriteSlice';

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div className="container bg-white p-10 mt-16 rounded-xl mb-10">
      <Header setOpenDrawer={setOpenDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {openDrawer && <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />}
    </div>
  );
}

export default App;
