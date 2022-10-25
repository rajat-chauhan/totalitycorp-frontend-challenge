import React from 'react';
import styles from './Leftside.module.css';
import Card from './../UI/Card/Card';
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
                        <div className={styles.desc} > User </div>
                    </a>
                    <a>
                        <div className={styles['photo-text']}>Software Engineer at ABC</div>
                    </a>
                </div>
                <div className={styles.widget}>
                    <a>
                        <div>
                          <span>Who's viewed your profile</span>
                        </div>
                         <p> 50</p>                 
                    </a>
                    <a>
                        <div>
                          <span>Connections</span>
                          <span>Manage your network</span>
                        </div>
                          <p>500</p>                  
                    </a>
                </div>
                <div className={styles.item}>
                    <span>
                     <img src={itemSvg} alt=''/> 
                     <p> My Items </p>                    
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
                    <span>Followed Hashtags</span>
                </a>
                <a className={styles.lastchild}> 
                    <div className={styles.lchild}>Discover more</div>
                </a>
            </Card>
        </div>
    );
};

export default Leftside;