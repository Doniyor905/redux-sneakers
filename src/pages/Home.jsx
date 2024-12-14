import HeaderSlider from '../components/HeaderSlider';
import Filters from '../components/Filters';
import CardList from '../components/CardList';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../redux/slices/cartSlice';
import { fetchFavorites } from '../redux/slices/favoriteSlice';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <>
      <HeaderSlider />
      <Filters />
      <CardList />
    </>
  );
};

export default Home;
