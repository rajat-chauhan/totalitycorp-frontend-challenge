import React from 'react';
import Card from '../UI/Card';
import styles from './Rightside.module.css';
import feedSvg from './../../assets/feed-icon.svg';
import arrowSvg from './../../assets/right-icon.svg';

const Rightside = () => {
    return (
        <div className={styles.right}> 
            <Card className={styles.card}>

                <div className={styles.title}>
                    <h2>Add to your feed</h2>
                    <img src={feedSvg} alt=''/>
                </div>

                <ul className={styles.feedlist}>
                    <li>
                        <a>
                            <div className={styles.avatar} />
                        </a>
                        <div className={styles.feeditem}>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <div className={styles.avatar} />
                        </a>
                        <div className={styles.feeditem}>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </ul>

                <div className={styles.recommendations}>
                    View all recommendations
                    <img src={arrowSvg} alt='' />
                </div>
            </Card>

            <div className={styles.banner}>
                <img src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' alt='' />
            </div>
        </div>
    );
};

export default Rightside;