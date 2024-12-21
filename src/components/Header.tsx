import { CircleUserRound, Heart, ShoppingCart } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

type HeaderProps = {
  setOpenDrawer: (el: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ setOpenDrawer }) => {
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  return (
    <div className="pb-10 flex flex-col mb-10 md:flex-row md:mb-0 items-center justify-between border-b-2 border-gray border-opacity-20">
      <Link to="/" className="flex gap-4 mb-4 md:mb-0 items-center">
        <img className="w-10 h-10" src={logo} alt="" />
        <div>
          <h3 className="font-bold text-xl uppercase leading-4">REACT SNEAKERS</h3>
          <p className="text-gray text-sm">Магазин лучших кроссовок</p>
        </div>
      </Link>
      <div className="flex gap-2 sm:gap-5">
        <div onClick={() => setOpenDrawer(true)} className="flex gap-2 items-center cursor-pointer">
          <ShoppingCart className="text-gray w-[20px]" />
          <p className="text-gray text-xs sm:text-sm font-semibold">{totalPrice} руб.</p>
        </div>
        <Link to="/favorite" className="flex gap-2 items-center cursor-pointer">
          <Heart className="text-gray w-[20px]" />
          <p className="text-gray text-xs sm:text-sm font-semibold">Закладки</p>
        </Link>
        <div className="flex gap-2 items-center cursor-pointer">
          <CircleUserRound className="text-gray w-[20px]" />
          <p className="text-gray text-xs sm:text-sm font-semibold">Профиль</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
