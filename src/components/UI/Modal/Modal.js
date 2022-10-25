import React from 'react';
import ReactDOM from 'react-dom';
import Card from './../Card/Card';
import styles from './Modal.module.css';
import crossImg from './../../../assets/cross-icon.png'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
        <img src={crossImg} alt='' onClick={props.onConfirm} />
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <button className={styles.cancelbtn} onClick={props.onConfirm}>Cancel</button>
        <button className={styles.donebtn} onClick={props.onConfirm} disabled>Done</button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;