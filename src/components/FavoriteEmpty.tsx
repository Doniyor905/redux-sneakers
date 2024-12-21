import favoriteEmpty from '../assets/images/favoriteEmpty.png';
import Button from './Button';
import { Link } from 'react-router';
const FavoriteEmpty: React.FC = () => {
  return (
    <div className="mt-[100px] flex items-center flex-col ">
      <img className="w-[70px] h-[70px]" src={favoriteEmpty} alt="" />
      <h2 className="font-bold text-2xl mt-7 mb-2">Закладок нет :(</h2>
      <p className="text-gray text-base mb-[70px]">Вы ничего не добавляли в закладки</p>
      <Link to="/">
        <Button>Вернуться назад</Button>
      </Link>
    </div>
  );
};

export default FavoriteEmpty;
