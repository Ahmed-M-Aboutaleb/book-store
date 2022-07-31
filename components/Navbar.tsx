import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-thin-svg-icons';
import {
    faCircleUser,
    faBookOpenReader,
} from '@fortawesome/pro-duotone-svg-icons';
import styles from '../styles/components/Navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={`${styles.col} ${styles.search}`}>
                <FontAwesomeIcon size='1x' icon={faMagnifyingGlass} />
                <input
                    className='appearance-none bg-transparent border-none text-gray-700 ml-2 py-1 px-2 leading-tight focus:outline-none w-3/5'
                    type={'text'}
                    placeholder='Find the book'
                />
            </div>
            <div className={`${styles.col} ${styles.logo}`}>
                <FontAwesomeIcon size='2x' icon={faBookOpenReader} />
            </div>
            <div className={`${styles.col} ${styles.account}`}>
                <FontAwesomeIcon size='2x' icon={faCircleUser} />
            </div>
        </div>
    );
}

export default Navbar;
