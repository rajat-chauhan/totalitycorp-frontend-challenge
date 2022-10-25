import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import styles from './Rightside.module.css';
import feedSvg from './../../assets/feed-icon.svg';
import downArrowPng from './../../assets/down-arrow-icon.png';
import upArrowPng from './../../assets/up-arrow-icon.png';
import crossPng from './../../assets/cross-icon.png';
import dotPng from './../../assets/dot-icon.png';
import logo from './../../assets/logo.svg';

const Rightside = () => {
    const [showIcon, setShowIcon] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showValue, setShowValue] = useState("Show more");
    const [showArrow, setShowArrrow] = useState(downArrowPng);

    function clickNewsIcon() {
        setShowIcon(true);
    }
    function clickCrossIcon() {
        setShowIcon(false);
    }
    function clickShowMore() {
        if (showValue === "Show less") {
            setShowMore(false);
            setShowValue("Show more");
            setShowArrrow(downArrowPng);
            return;
        }
        setShowMore(true);
        setShowValue("Show less");
        setShowArrrow(upArrowPng);
    }

    return (
        <>
            {showIcon &&
                <div className={styles.backdrop}>
                    <div className={styles.news}>
                        <p> These are the day’s top professional news stories and conversations.<a>Learn more</a> about how they’re selected.</p>
                        <div>
                            <img onClick={clickCrossIcon} src={crossPng} alt="" />
                        </div>
                    </div>
                </div>
            }

            <div className={styles.right}>

                <Card className={styles.card}>

                    <div className={styles.title}>
                        <h2>Linkedin News</h2>
                        <img onClick={clickNewsIcon} src={feedSvg} alt='' />
                    </div>

                    <ul className={styles.feedlist}>
                        <li>
                            <h2>Totality-corp to hire a frontend developer</h2>
                            <span>2d ago <img src={dotPng} alt='' /> 500 readers</span>
                        </li>
                        <li>
                            <h2>How to become a frontend developer?</h2>
                            <span>3d ago <img src={dotPng} alt='' /> 1800 readers</span>
                        </li>
                        <li>
                            <h2>Totality-corp to hire a frontend developer</h2>
                            <span>5d ago <img src={dotPng} alt='' /> 5100 readers</span>
                        </li>
                        <li>
                            <h2>A Comprehensive Guide To Becoming a Frontend Developer</h2>
                            <span>4d ago <img src={dotPng} alt='' /> 4500 readers</span>
                        </li>
                        {showMore && <>
                            <li>
                                <h2>Totality-corp to hire a frontend developer</h2>
                                <span>2d ago <img src={dotPng} alt='' /> 500 readers</span>
                            </li>
                            <li>
                                <h2>How to become a frontend developer?</h2>
                                <span>3d ago <img src={dotPng} alt='' /> 1800 readers</span>
                            </li> </>}
                    </ul>

                    <div className={styles.recommendations} onClick={clickShowMore}>
                        <p>{showValue}</p>
                        <img src={showArrow} alt='' />
                    </div>
                </Card>

                <div className={styles.banner}>
                    <img src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' alt='' />
                </div>

                <div className={styles.footer}>
                    <img src={logo} alt='' />
                    <span>LinkedIn Clone © 2022</span>
                </div>
            </div>
        </>
    );
};

export default Rightside;