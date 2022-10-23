import React from 'react';
import styles from './Leftside.module.css';
import Card from '../UI/Card';
import widgetSvg from './../../assets/widget-icon.svg';
import itemSvg from './../../assets/item-icon.svg';
import plusSvg from './../../assets/plus-icon.svg'

const Leftside = () => {
    return (
        <div className={styles.left}>
            
            <Card>
                <div className={styles['card-info']}>
                    <div className={styles['card-background']} />
                    <a>
                        <div className={styles.photo} />
                        <div className={styles.desc} >Welcome, there!</div>
                    </a>
                    <a>
                        <div className={styles['photo-text']}>Add a photo</div>
                    </a>
                </div>
                <div className={styles.widget}>
                    <a>
                        <div>
                          <span>Connections</span>
                          <span>Grow your network</span>
                        </div>
                        <img src={widgetSvg} alt=''/>                   
                    </a>
                </div>
                <div className={styles.item}>
                    <span>
                     <img src={itemSvg} alt=''/> 
                     My Items                    
                    </span>
                </div>
            </ Card>

            <Card className={styles['community-card']}>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src={plusSvg} alt='' />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a className={styles.lastchild}> 
                    <span className={styles.lchild}>Discover More</span>
                </a>
            </Card>
        </div>
    );
};

export default Leftside;