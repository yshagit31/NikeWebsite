import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer" width={120} height={120} className="rounded-full object-cover" />
      <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img src={star} alt="rating star" width={24}
          height={24} className='object-contain m-0'/>
         <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h2 className="font-bold font-palanquin text-3xl mt-1 text-center">{customerName}</h2>
    </div>
  )}

export default ReviewCard;
