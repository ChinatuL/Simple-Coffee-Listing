import starFill from "../assets/images/Star_fill.svg";
import star from "../assets/images/Star.svg";
const Card = ({ name, image, available, popular, price, rating, votes }) => {
    return (
        <div>
            <div className='relative'>
                {popular && (
                    <span className='absolute top-2 left-2 text-sm bg-[#F6C768] text-[#111315] py-1 px-4 rounded-xl font-semibold'>
                        Popular
                    </span>
                )}
                <img src={image} alt={name} className='w-full rounded-xl' />
            </div>
            <div className='flex justify-between items-center pt-2'>
                <h2 className='font-semibold'>{name}</h2>
                <p className='text-xs bg-[#BEE3CC] text-[#1B1D1F] font-bold py-1 px-2 rounded'>
                    {price}
                </p>
            </div>
            <div className='flex justify-between pt-2'>
                <div className='flex gap-1 items-center font-semibold'>
                    {rating ? (
                        <>
                            <img src={starFill} alt='' />
                            <div>
                                <span>{rating}</span>{" "}
                                <span className='text-[#6F757C]'>
                                    ({votes} votes)
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <img src={star} alt='' />{" "}
                            <span className='text-[#6F757C]'>No ratings</span>
                        </>
                    )}
                </div>
                {!available && <span className='text-[#ED735D]'>Sold out</span>}
            </div>
        </div>
    );
};
export default Card;
