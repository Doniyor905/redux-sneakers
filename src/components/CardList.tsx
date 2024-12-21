import React from 'react';
import Skeleton from './Skeleton';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSneakers } from '../redux/slices/sneakersSlice';

const CardList = () => {
  const { sortBy, searchCard } = useSelector((state: any) => state.filter);
  const { items, status } = useSelector((state: any) => state.sneakers);

  const search = searchCard ? `title=*${searchCard}` : '';
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchAction = fetchSneakers as any;
    (dispatch as any)(
      fetchAction({
        params: { sortBy, search },
      }),
    );
  }, [search, sortBy]);
  return (
    <div className="mt-10 grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
      {status === 'loading'
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : items.map((item: any) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default CardList;
