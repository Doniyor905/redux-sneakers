import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import backImg from '../assets/images/backIcon.svg';
import Title from '../components/Title';
import Card from '../components/Card';
import FavoriteEmpty from '../components/FavoriteEmpty';
const Favorite: React.FC = () => {
  const { favoriteItems } = useSelector((state: any) => state.favorite);
  return (
    <div className="mt-10">
      <div className="flex gap-3">
        <Link to="/">
          <img className="cursor-pointer" src={backImg} alt="" />
        </Link>
        <Title>Мои закладки</Title>
      </div>
      {favoriteItems.length ? (
        <div className="grid grid-cols-5 mt-5">
          {favoriteItems.map((item: any) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <FavoriteEmpty />
      )}
    </div>
  );
};

export default Favorite;
