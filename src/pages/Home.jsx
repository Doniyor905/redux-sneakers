import HeaderSlider from '../components/HeaderSlider';
import Filters from '../components/Filters';
import CardList from '../components/CardList';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../redux/slices/cartSlice';

const Home = () => {

  return (
    <>
      <HeaderSlider />
      <Filters />
      <CardList />
    </>
  );
};

export default Home;
