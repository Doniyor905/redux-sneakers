import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addIcon from '../assets/images/add.svg';
import addedIcon from '../assets/images/added.svg';
import likeIcon from '../assets/images/like.svg';
import likedIcon from '../assets/images/liked.svg';

import { addToCart, removeCart, setAddItems } from '../redux/slices/cartSlice';
import { setFavoriteItems } from '../redux/slices/favoriteSlice';

const Card = ({ id, title, price, imageUrl, isAdded }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const isAddeda = cartItems.some((item) => item.title === title);
  const isLiked = favoriteItems.some((item) => item.id === id);

  const toggleCart = () => {
    const items = {
      id,
      title,
      price,
      imageUrl,
      isAdded: true,
    };
    const find = cartItems.find((item) => item.title === title);
    if (find) {
      dispatch(removeCart(find));
    } else {
      dispatch(addToCart(items));
    }
  };

  const onClickFavorite = () => {
    const items = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(setFavoriteItems(items));
  };
  return (
    <div className="justify-center mx-auto">
      <div className="relative  w-[210px] h-[260px] pt-4 pl-8 pr-8 border-2 border-[#F3F3F3] rounded-[40px] bg-white hover:shadow-xl hover:-translate-y-2 transition delay-250">
        <img
          onClick={() => onClickFavorite()}
          className="w-8 h-8 cursor-pointer absolute t-0 l-0"
          src={isLiked ? likedIcon : likeIcon}
          alt=""
        />
        <img className="w-[133px]" src={imageUrl} alt="" />
        <p className="text-sm mb-3">{title}</p>
        <div className="flex justify-between">
          <div>
            <p className="text-lightGray text-[12px] font-medium uppercase leading-0">Цена:</p>
            <p className="text-black text-sm font-bold">{price} руб.</p>
          </div>
          <img
            onClick={() => toggleCart()}
            className="cursor-pointer"
            src={isAddeda ? addedIcon : addIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
