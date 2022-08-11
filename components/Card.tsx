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
                        src={`/books/${img}.jpeg`}
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
                        className={`${styles.button} ${
                            color == 'blue' && styles.blueButton
                        }
                        ${color == 'green' && styles.greenButton}
                        ${color == 'red' && styles.redButton}`}
                    >
                        Read 👀
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
