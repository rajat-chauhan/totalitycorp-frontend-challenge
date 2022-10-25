import React, { useState } from 'react';
import Card from './../UI/Card/Card';
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
import Modal from '../UI/Modal/Modal';

const Main = () => {
    const [countLike, setCountLike] = useState(100);
    const [repostCount, setRepostCount] = useState(10);
    const [showImgModal, setShowImgModal] = useState(false);
    const [showVdoModal, setShowVdoModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);

    function clickLikeHandler(){
        setCountLike((prevValue) => prevValue + 1 )
    }

    function clickRepostHandler(){
        setRepostCount((prevValue) => prevValue + 1)
    }

    function clickPhotoHandler(){
        setShowImgModal(true);
    }
    function clickVideoHandler(){
        setShowVdoModal(true);
    }
    function hideImgModal(){
        setShowImgModal(false);
    }
    function hideVdoModal(){
        setShowVdoModal(false);
    }
    function clickStartPostHandler(){
        setShowPostModal(true);
    }
    function hidePostModal(){
        setShowPostModal(false);
    }

    return (
        <>
        {showImgModal && <Modal title= 'Edit your photo' message='Select images to share' onConfirm={hideImgModal} />}
        {showVdoModal && <Modal title= 'Select/Edit your video' message='Select video to share'  onConfirm={hideVdoModal} />}
        {showPostModal && <Modal title= 'Create your post' message='Write your post...'  onConfirm={hidePostModal} />}
        <div className={styles.main}>
            <Card className={styles.sharebox}>
                <div className={styles.upper}>
                    <img src={userSvg} alt='' />
                    <button onClick={clickStartPostHandler}>Start a post</button>
                </div>
                <div className={styles.lower}>
                    <button onClick={clickPhotoHandler}>
                        <img className={styles['lower-img-svg']} src={photoSvg} alt='' />
                        <span>Photo</span>
                    </button>
                    <button onClick={clickVideoHandler}> 
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
                            <span> Rajat Chauhan </span>
                            <span> Software Engineer </span>
                            <span> 22-Oct-2022 </span>
                        </div>
                    </a>
                    <button><img src={ellipsisPng} alt='' /></button>
                </div>
                <div className={styles.description}>
                    Working on Totality-corp frontend challenge!
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
                            <span>{countLike}</span>
                        </button>
                    </li>
                    <li>
                        <a>5 comments</a>
                    </li>
                </ul>
                <div className={styles.socialicon}>
                    <button className={styles.btn} onClick={clickLikeHandler}>
                        <img src={likeSvg} alt='' />
                        <span>  Like </span>
                    </button>
                    <button className={styles.btn}>
                        <img src={commentSvg} alt='' />
                        <span> Comment </span>
                    </button>
                    <button className={styles.btn} onClick={clickRepostHandler}>
                        <img src={repostSvg} alt='' />
                        <span><sup> {repostCount} </sup>Repost</span> 
                    </button>
                    <button className={styles.btn}>
                        <img src={sendSvg} alt='' />
                        <span> Send </span> 
                    </button>
                </div>
            </Card>
        </div>
        </>
    );
};

export default Main;