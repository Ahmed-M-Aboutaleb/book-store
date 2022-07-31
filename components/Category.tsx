import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/Category.module.scss';

function Category({ icon, name }: { icon: any; name: String }) {
    return (
        <div className={`${styles.container} cursor-pointer`}>
            <FontAwesomeIcon icon={icon} size='4x' />
            <p className='select-none'>{name}</p>
        </div>
    );
}

export default Category;
