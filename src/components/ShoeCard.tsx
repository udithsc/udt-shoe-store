interface ShoeCardProps {
  imgUrl: {
    thumbnail: string;
    bigShoe: string;
  };
  bigShowImg: string;
  changeBigShoeImage: (url: string) => void;
}

const ShoeCard = ({
  imgUrl,
  bigShowImg,
  changeBigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShowImg !== imgUrl.bigShoe) changeBigShoeImage(imgUrl.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShowImg === imgUrl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
        } cursor-pointer`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover w-24 h-24 sm:w-40 sm:h-40 rounded-xl p-2 sm:p-0'>
        <img
          src={imgUrl.thumbnail}
          alt='show collection'
          className='object-contain w-full h-full'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
