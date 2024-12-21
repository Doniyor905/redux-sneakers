import imageHeader from '../assets/images/header-image.png';
const HeaderSlider: React.FC = () => {
  return (
    <div className="hidden lg:h-[300px] lg:flex md:h-[247px] md:flex mb-8 bg-[#F4EFE9] rounded-xl mt-10 flex justify-between items-center">
      <div className="pl-10">
        <h2 className="text-green text-[28px] md:text-[38px] w-[240px] leading-8 md:leading-8 font-bold">
          Stan Smith <span className="text-black">, Forever!</span>
        </h2>
        <button className="flex items-center justify-center w-[147px] h-[38px] md:w-[177px] md:h-[45px] uppercase bg-green rounded-3xl font-bold text-white mt-3">
          Купить
        </button>
      </div>
      <div>
        <img src={imageHeader} alt="" />
      </div>
    </div>
  );
};

export default HeaderSlider;
