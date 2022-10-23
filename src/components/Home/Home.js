import React from 'react';
import styles from './Home.module.css';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles['home-layout']}>
                <Leftside />
                <Main />
                <Rightside />
            </div>
        </div>
    );
};

export default Home;