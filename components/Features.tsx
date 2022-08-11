import {
    faArrowRotateLeft,
    faHeadset,
    faShield,
    faWallet,
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/components/Features.module.scss';

function Features() {
    return (
        <>
            <div className={styles.col}>
                <FontAwesomeIcon size='3x' icon={faShield} />
                <div className={styles.container}>
                    <h2>Secure Payments</h2>
                    <p>100% Secure & Safe</p>
                </div>
            </div>
            <div className={styles.col}>
                <FontAwesomeIcon size='3x' icon={faArrowRotateLeft} />
                <div className={styles.container}>
                    <h2>6 Days Return</h2>
                    <p>Best books with good prices</p>
                </div>
            </div>
            <div className={styles.col}>
                <FontAwesomeIcon size='3x' icon={faWallet} />
                <div className={styles.container}>
                    <h2>Good Prices</h2>
                    <p>Best Books With Good Prices</p>
                </div>
            </div>
            <div className={styles.col}>
                <FontAwesomeIcon size='3x' icon={faHeadset} />
                <div className={styles.container}>
                    <h2>24/7 Support</h2>
                    <p>Dedicated Support</p>
                </div>
            </div>
        </>
    );
}

export default Features;
