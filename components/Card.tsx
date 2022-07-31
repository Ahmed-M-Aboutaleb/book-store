import Image from 'next/image';
import Rating from './Rating';
import styles from '../styles/components/Card.module.scss';

type CardProps = {
    title: string;
    img: string;
    rating: number;
    color: string;
};

function Card({ title, img, rating, color }: CardProps) {
    return (
        <div className='flex m-2 md:w-full justify-center items-center'>
            <div className={`${styles.card} ${styles[color]}`}>
                <div className='w-1/2 relative max-h-full'>
                    <Image
                        src={`/books/${img}.png`}
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='book'
                    />
                </div>
                <div className='w-1/2 p-3 flex items-center flex-col relative'>
                    <h3 className='text-md md:text-lg font-normal text-center'>
                        {title}
                    </h3>
                    <Rating rating={rating} />
                    <button
                        className={`absolute bottom-0 py-2 px-3 text-white text-sm font-semibold rounded-md shadow-lg focus:outline-none ${
                            color == 'blue' &&
                            'bg-cyan-500 shadow-cyan-500/50 hover:bg-cyan-600 transition-all duration-200'
                        }
                        ${
                            color == 'green' &&
                            'bg-[#2a9c89] shadow-green-400/50 hover:bg-[#227e6e] transition-all duration-200'
                        }
                        ${
                            color == 'red' &&
                            'bg-pink-500 shadow-red-500/50 hover:bg-pink-600 transition-all duration-200'
                        }`}
                    >
                        Read 👀
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
