import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBasketShoppingSimple,
    faMagnifyingGlass,
    faCircleUser,
} from '@fortawesome/pro-light-svg-icons';
import { faBookOpenReader, faBooks } from '@fortawesome/pro-duotone-svg-icons';
import styles from '../styles/components/Navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={`${styles.col} ${styles.search}`}>
                <a href='#categories' className={styles.categories}>
                    <FontAwesomeIcon size='1x' icon={faBooks} />
                    <h2 className='uppercase text-[9px] md:text-sm font-bold m-2 select-none'>
                        Browse Categories
                    </h2>
                </a>
            </div>
            <div className={`${styles.col} ${styles.logo}`}>
                <FontAwesomeIcon size='2x' icon={faBookOpenReader} />
            </div>
            <div className={`${styles.col} ${styles.account}`}>
                <div className='flex gap-2 md:gap-5'>
                    <FontAwesomeIcon size='lg' icon={faBasketShoppingSimple} />
                    <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon size='lg' icon={faCircleUser} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
