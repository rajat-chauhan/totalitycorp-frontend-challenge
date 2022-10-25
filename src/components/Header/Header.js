import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoSvg from './../../assets/home-logo.svg';
import searchSvg from './../../assets/search-icon.svg';
import navHomeSvg from './../../assets/nav-home.svg';
import navNetworkSvg from './../../assets/nav-network.svg';
import navJobsSvg from './../../assets/nav-jobs.svg';
import navMsgSvg from './../../assets/nav-messaging.svg';
import navNotiSvg from './../../assets/nav-notifications.svg';
import userSvg from './../../assets/user.svg';
import downSvg from './../../assets/down-icon.svg';
import workSvg from './../../assets/nav-work.svg';

const Header = () => {
    const [showSignout, setShowSignout] = useState(false);

    function showSignoutHandler(){
        setShowSignout(true);
    }
    function hideSignoutHandler(){
        setTimeout(() => {
            setShowSignout(false);
        }, 2000)
    }

    return (
        <div className={styles.header} >
            <div className={styles['header-content']} >

                <span className={styles['header-logo']} >
                    <Link to='/home' >
                        <img className={styles.lnlogo} src={logoSvg} alt='' />
                    </Link>
                </span>

                <div className={styles['header-search']} >
                    <div className={styles['header-search-box']}>
                        <input type="text" placeholder='Search'></input>
                    </div>
                    <div className={styles['header-search-icon']}  >
                        <img src={searchSvg} alt='' />
                    </div>
                </div>
                <div className={styles['header-navs']}>
                    <ul>
                        <li className={styles.active}> <a> <img src={navHomeSvg} alt='' /> <span>Home</span> </a> </li>
                        <li> <a> <img src={navNetworkSvg} alt='' /> <span>My Network</span> </a> </li>
                        <li> <a> <img src={navJobsSvg} alt='' /> <span>Jobs</span> </a> </li>
                        <li> <a> <img src={navMsgSvg} alt='' /> <span>Messaging</span> </a> </li>
                        <li> <a> <img src={navNotiSvg} alt='' /> <span>Notifications</span> </a> </li>
                        <div className={styles['header-user-icon']}>
                            <a>
                                <img className={styles.usericon} src={userSvg} alt='' />
                                <span className={styles.user} onClick={showSignoutHandler} onMouseLeave={hideSignoutHandler}>
                                    <span>Me</span>
                                    <img className={styles.imgdown} src={downSvg} alt='' />
                                </span>
                            </a>
                            {showSignout && <div className={styles.signout}>
                                <a> Sign Out </a>
                            </div>}
                        </div>
                        <div className={styles['header-work-icon']}>
                            <a>
                                <img src={workSvg} alt='' />
                                <span className={styles.work} >
                                    <span>Work</span>
                                    <img className={styles.imgdown} src={downSvg} alt='' />
                                </span>
                            </a>
                        </div>

                        <div className={styles['header-link']}>
                            <p>
                                Get Hired Faster,
                                Try Premium Free
                            </p>
                        </div>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Header;