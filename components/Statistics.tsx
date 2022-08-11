import styles from '../styles/components/Statistics.module.scss';

function Statistics() {
    return (
        <>
            <h1 className='text-2xl font-semibold leading-normal mt-6'>
                Statistics
            </h1>
            <div className={styles.container}>
                <div className='text-center '>
                    <h2 className={styles.number}>5867</h2>
                    <p>Books</p>
                </div>
                <div className='text-center '>
                    <h2 className={styles.number}>869</h2>
                    <p>Authors</p>
                </div>
                <div className='text-center '>
                    <h2 className={styles.number}>+10K</h2>
                    <p>Users</p>
                </div>
            </div>
        </>
    );
}

export default Statistics;
