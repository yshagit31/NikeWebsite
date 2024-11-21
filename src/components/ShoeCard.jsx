
const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImg }) => {

  const handleClick = () => {
    if (bigShoeImg !== imgUrl) {
      changeBigShoeImg(imgUrl)
    }
  };

  return (
    <div className=
      {`border-2  rounded-xl ${imgUrl === bigShoeImg ? 'border-coral-red' : 'border-transparent'}  
         max-sm: flex-1 cursor-pointer`} onClick={handleClick} >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
        <img src={imgUrl} alt="shoe collection"
          width={127}
          height={103.34}
          className='object-contain' />
      </div>
    </div>
  )
}

export default ShoeCard
