import { useDispatch, useSelector } from 'react-redux';
import Title from './Title';
import { Search } from 'lucide-react';
import { setSearchCard, setSortBy } from '../redux/slices/filtersSlice';
import debounce from 'lodash.debounce';
import React from 'react';
const sortList = [
  { name: 'По названию', value: '' },
  { name: 'По цене (дешевые)', value: '-price' },
  { name: 'По цене (дорогие)', value: 'price' },
];
const Filters = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const updateSearch = React.useCallback(
    debounce((str) => {
      dispatch(setSearchCard(str));
    }, 250),
    [],
  );

  const onChangeSearch = (event) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <div className="flex items-center justify-between flex-col lg:flex-row">
      <Title className="mb-8">Все кроссовки</Title>
      <div className="flex gap-2 flex-col sm:flex-row">
        <select
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="border-2 cursor-pointer w-[250px] sm:w-[200px] h-[45px] border-[#F3F3F3] p-3 rounded-xl focus:outline-none">
          {sortList.map((sort, i) => (
            <option key={i} value={sort.value}>
              {sort.name}
            </option>
          ))}
        </select>
        <div className=" flex items-center gap-2 pl-2 pr-2 border-2 border-[#F3F3F3] rounded-xl  w-[250px] h-[45px]">
          <Search className="text-lightGray w-[20px]" />
          <input
            value={value}
            onChange={(e) => onChangeSearch(e)}
            className="w-full focus:outline-none  text-gray"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
