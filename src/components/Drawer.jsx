import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from '../assets/images/closeIcon.svg';
import { ArrowRight } from 'lucide-react';
import { removeCart } from '../redux/slices/cartSlice';
import CartEmpty from './CartEmpty';
const Drawer = ({ setOpenDrawer }) => {
  const addItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <div className={'fixed z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-35'}>
        <div
          className={
            'absolute p-3 right-0 top-0 w-[385px] bg-white h-screen flex flex-col justify-between'
          }>
          {addItems.length === 0 ? (
            <CartEmpty setOpenDrawer={setOpenDrawer} />
          ) : (
            <div>
              <div className="">
                <div className="flex justify-between gap-2 mb-8">
                  <h2 className="text-2xl font-bold">Корзина</h2>
                  <img
                    onClick={() => setOpenDrawer(false)}
                    className="cursor-pointer hover:opacity-60"
                    src={closeIcon}
                    alt=""
                  />
                </div>
                <div className="overflow-y-scroll h-[420px] mb-12">
                  {addItems.map((item) => (
                    <div
                      key={item.id}
                      className="pl-3 pr-3 mb-3 flex justify-between items-center w-[325px] h-[119px] border-2 border-[#F3F3F3] rounded-[20px]">
                      <img className="w-[70px]" src={item.imageUrl} alt="" />
                      <div className="w-[150px]">
                        <p className="text-sm">{item.title}</p>
                        <b className="text-sm font-bold">{item.price} руб.</b>
                      </div>
                      <img
                        onClick={() => dispatch(removeCart(item))}
                        className="cursor-pointer hover:opacity-60"
                        src={closeIcon}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2">
                  <p className="text-base">Итого:</p>
                  <span className="flex-1 border-b border-dashed border-gray mb-2"></span>
                  <b className="text-base">{totalPrice} руб. </b>
                </div>

                <div className="flex items-end gap-2">
                  <p className="text-base">Налог 5%:</p>
                  <span className="flex-1 border-b border-dashed border-gray mb-2"></span>
                  <b className="text-base">{Math.floor(totalPrice * 0.05)} руб. </b>
                </div>
                <div className="group/edit mx-auto hover:bg-[#86B24F] gap-4 transition w-[355px] font-bold text-white cursor-pointer h-[55px] bg-green rounded-[18px] flex items-center  justify-center">
                  Оформить заказ
                  <ArrowRight className="w-[20px] group-hover/edit:translate-x-0.5 transition" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
