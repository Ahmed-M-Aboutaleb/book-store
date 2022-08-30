import styles from '../styles/components/Footer.module.scss';

function Footer() {
    return (
        <div>
            <svg
                width='100%'
                height='100%'
                id='svg'
                viewBox='0 0 1440 400'
                xmlns='http://www.w3.org/2000/svg'
                className='transition duration-300 ease-in-out delay-150'
            >
                <defs>
                    <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='50%'
                        x2='100%'
                        y2='50%'
                    >
                        <stop offset='5%' stopColor='#50c8b488'></stop>
                        <stop offset='95%' stopColor='#3dd6cb88'></stop>
                    </linearGradient>
                </defs>
                <path
                    d='M 0,400 C 0,400 0,133 0,133 C 34.74018928053475,102.96389163046895 69.4803785610695,72.9277832609379 111,84 C 152.5196214389305,95.0722167390621 200.81867503625682,147.25275858671733 239,156 C 277.1813249637432,164.74724141328267 305.2449212939035,130.0611823921928 339,126 C 372.7550787060965,121.93881760780721 412.20163978812946,148.5025118445116 447,141 C 481.79836021187054,133.4974881554884 511.9485195535789,91.92877022976084 543,85 C 574.0514804464211,78.07122977023916 606.0042819975552,105.78240723644504 644,123 C 681.9957180024448,140.21759276355496 726.0343524562007,146.94160082445896 769,158 C 811.9656475437993,169.05839917554104 853.8583081776424,184.45118946571915 888,174 C 922.1416918223576,163.54881053428085 948.5324148332298,127.25364131266444 984,110 C 1019.4675851667702,92.74635868733556 1064.0120324894383,94.53424528362306 1110,89 C 1155.9879675105617,83.46575471637694 1203.4194552090166,70.6093775528433 1233,89 C 1262.5805447909834,107.3906224471567 1274.3101466744956,157.02824450500373 1314,170 C 1353.6898533255044,182.97175549499627 1421.3399580930013,159.27764442714178 1447,147 C 1472.6600419069987,134.72235557285822 1456.3300209534993,133.8611777864291 1440,133 C 1440,133 1440,400 1440,400 Z'
                    stroke='none'
                    strokeWidth='0'
                    fill='url(#gradient)'
                    className={`transition-all duration-300 ease-in-out delay-150 ${styles.path0}`}
                ></path>
                <defs>
                    <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='50%'
                        x2='100%'
                        y2='50%'
                    >
                        <stop offset='5%' stopColor='#50c8b4ff'></stop>
                        <stop offset='95%' stopColor='#3dd6cbff'></stop>
                    </linearGradient>
                </defs>
                <path
                    d='M 0,400 C 0,400 0,266 0,266 C 34.08782298769347,265.48935993647865 68.17564597538694,264.97871987295724 108,266 C 147.82435402461306,267.02128012704276 193.38523908614565,269.57448044464974 228,262 C 262.61476091385435,254.42551955535026 286.28339768003053,236.72335834844398 323,230 C 359.71660231996947,223.27664165155602 409.48117019373234,227.53208616157428 445,232 C 480.51882980626766,236.46791383842572 501.79192154504017,241.14829700525894 542,261 C 582.2080784549598,280.85170299474106 641.3511436261068,315.8747258173902 680,303 C 718.6488563738932,290.1252741826098 736.8035039505324,229.35279972518035 774,225 C 811.1964960494676,220.64720027481965 867.4348405717633,272.71407528188837 904,297 C 940.5651594282367,321.28592471811163 957.4571337624143,317.79089914726603 988,308 C 1018.5428662375857,298.20910085273397 1062.7366243785798,282.1223281290475 1108,270 C 1153.2633756214202,257.8776718709525 1199.5963687232672,249.71978833654396 1237,259 C 1274.4036312767328,268.28021166345604 1302.877900728351,294.99851852477667 1339,301 C 1375.122099271649,307.00148147522333 1418.8920283633283,292.28613756434953 1437,283 C 1455.1079716366717,273.71386243565047 1447.5539858183358,269.85693121782526 1440,266 C 1440,266 1440,400 1440,400 Z'
                    stroke='none'
                    strokeWidth='0'
                    fill='url(#gradient)'
                    className={`transition-all duration-300 ease-in-out delay-150 ${styles.path1}`}
                ></path>
            </svg>
        </div>
    );
}

export default Footer;