import {
    faUserDoctor,
    faBaseballBatBall,
    faWandSparkles,
    faBook,
    faGun,
    faJackOLantern,
    faLandmarkDome,
    faUserSecret,
} from '@fortawesome/pro-thin-svg-icons';
import type { NextPage } from 'next';
import Card from '../components/Card';
import Category from '../components/Category';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className='text-2xl font-semibold leading-normal mt-6 mb-4'>
                Popular Now
            </h1>
            <div className='flex flex-col w-full md:flex-row'>
                <Card
                    title='A journey to The Moon'
                    img='1'
                    rating={4}
                    color='blue'
                />
                <Card
                    title='Seven Endless Forests'
                    img='2'
                    rating={5}
                    color='green'
                />
                <Card title='Fairyland' img='3' rating={3} color='red' />
            </div>
            <h1 className='text-2xl font-semibold leading-normal mt-6 mb-4'>
                Categories
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center items-center'>
                <Category name='Scientific' icon={faUserDoctor} />
                <Category name='Athletic' icon={faBaseballBatBall} />
                <Category name='Fantasy' icon={faWandSparkles} />
                <Category name='Literary' icon={faBook} />
                <Category name='Action' icon={faGun} />
                <Category name='Horror' icon={faJackOLantern} />
                <Category name='Historical' icon={faLandmarkDome} />
                <Category name='Detective' icon={faUserSecret} />
            </div>
            <hr className='border-dashed m-5 border-2 w-1/3 ml-auto mr-auto border-slate-400' />
            <h1 className='text-2xl font-semibold leading-normal mt-6'>
                Statistics
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 h-80 justify-items-center items-center'>
                <div className='text-center '>
                    <h2 className='text-4xl m-2 font-simibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#50c8b4]'>
                        5867
                    </h2>
                    <p>Books</p>
                </div>
                <div className='text-center '>
                    <h2 className='text-4xl m-2 font-simibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#50c8b4]'>
                        869
                    </h2>
                    <p>Authors</p>
                </div>
                <div className='text-center '>
                    <h2 className='text-4xl m-2 font-simibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#50c8b4]'>
                        +10K
                    </h2>
                    <p>Users</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
