import React from 'react';
import Card from './../UI/Card';
import styles from './Main.module.css';
import userSvg from './../../assets/user.svg';
import photoSvg from './../../assets/picture_icon.svg';
import videoSvg from './../../assets/video-icon.png';
import eventSvg from './../../assets/event-icon.png';
import articleSvg from './../../assets/article-icon.svg';
import ellipsisPng from './../../assets/ellipsis-icon.png';
import mainImage from './../../assets/main-image.jpg';
import likeSvg from './../../assets/like-icon.png';
import commentSvg from './../../assets/comment-icon.png';
import repostSvg from './../../assets/repost-icon.png';
import sendSvg from './../../assets/send-icon.png';

const Main = () => {
    return (
        <div className={styles.main}>
            <Card className={styles.sharebox}>
                <div className={styles.upper}>
                    <img src={userSvg} alt='' />
                    <button>Start a post</button>
                </div>
                <div className={styles.lower}>
                    <button>
                        <img className={styles['lower-img-svg']} src={photoSvg} alt='' />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img className={styles['lower-img-png']} src={videoSvg} alt='' />
                        <span>Video</span>
                    </button>
                    <button>
                        <img className={styles['lower-img-png']} src={eventSvg} alt='' />
                        <span>Event</span>
                    </button>
                    <button>
                        <img className={styles['lower-img-svg']} src={articleSvg} alt='' />
                        <span>Write article</span>
                    </button>
                </div>
            </Card>

            <Card className={styles.article}>
                <div className={styles.innerarticle}>
                    <a>
                        <img src={userSvg} alt='' />
                        <div>
                            <span> Title </span>
                            <span> Info </span>
                            <span> Date </span>
                        </div>
                    </a>
                    <button><img src={ellipsisPng} alt='' /></button>
                </div>
                <div className={styles.description}>
                    Description
                </div>
                <div className={styles.sharedImg}>
                    <a>
                        <img src={mainImage} alt='' />
                    </a>
                </div>
                <ul className={styles['social-count']}>
                    <li>
                        <button>
                            <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' alt='' />
                            <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f' alt='' />
                            <span>100</span>
                        </button>
                    </li>
                    <li>
                        <a>5 comments</a>
                    </li>
                </ul>
                <div className={styles.socialicon}>
                    <button className={styles.btn}>
                        <img src={likeSvg} alt='' />
                        <span>  Like </span>
                    </button>
                    <button className={styles.btn}>
                        <img src={commentSvg} alt='' />
                        <span> Comment </span>
                    </button>
                    <button className={styles.btn}>
                        <img src={repostSvg} alt='' />
                        <span>  Repost</span> 
                    </button>
                    <button className={styles.btn}>
                        <img src={sendSvg} alt='' />
                        <span> Send </span> 
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Main;