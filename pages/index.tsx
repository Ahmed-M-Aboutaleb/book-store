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
import Features from '../components/Features';
import Footer from '../components/Footer';
import Statistics from '../components/Statistics';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Popular Now</h1>
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
            </div>
            <div className={styles.features}>
                <Features />
            </div>
            <div className={styles.categories} id='categories'>
                <h1 className={styles.title}>Categories</h1>
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
            </div>
            <div className={styles.statistics}>
                <Statistics />
            </div>
            <Footer />
        </>
    );
};

export default Home;
