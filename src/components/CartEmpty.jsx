import { Link } from 'react-router';
import cartEmpty from '../assets/images/cartEmpty.png';
import Button from './Button';

const CartEmpty = ({ setOpenDrawer }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={cartEmpty} alt="" className="w-[120px]" />
      <h3 className="text-xl mt-5 mb-2 text-black">Корзина пустая</h3>
      <p className="text-sm text-lightGray w-[285px] mb-10 text-center">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <Button onClick={() => setOpenDrawer(false)}>Вернуться назад</Button>
    </div>
  );
};

export default CartEmpty;
