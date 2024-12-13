import React from 'react';
import Skeleton from './Skeleton';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSneakers } from '../redux/slices/sneakersSlice';

const CardList = () => {
  const sortBy = useSelector((state) => state.filter.sortBy);
  const searchCard = useSelector((state) => state.filter.searchCard);
  const { items, status } = useSelector((state) => state.sneakers);

  const search = searchCard ? `title=*${searchCard}` : '';
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      fetchSneakers({
        params: { sortBy, search },
      }),
    );
  }, [search, sortBy]);
  return (
    <div className="mt-10 grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
      {status === 'loading'
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : items.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default CardList;
