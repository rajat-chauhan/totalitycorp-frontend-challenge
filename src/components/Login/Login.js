import React from 'react';
import styles from './Login.module.css';
import svg from './../../assets/logo.svg';
import svg2 from './../../assets/google.svg';

const Login = () => {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <a href='/'>
                    <img src={svg} alt="" />
                </a>
                <div className={styles.btns}>
                    <button className={styles['join-btn']}> Join now </button>
                    <button className={styles['sign-btn']}> Sign in </button>
                </div>
            </div>
            
            <div className={styles.section}>
                <div className={styles['section-content']}>
                    <h1> Welcome to your professional community</h1>
                    <img src={require('./../../assets/img1.jpg')} alt=""/>
                </div>
                <div className={styles.google}>
                    <button>
                        <img src={svg2} alt='' />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;



