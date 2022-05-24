import React from 'react';
import style from './Modal.module.css';

export default function Modal(props) {
    return (
        <>
            <div className={style.blurBg}></div>
            <div className={style.container}>
                <h3>Add Note</h3>
                <label>
                    <span>Title: </span>
                    <input type='text'
                        name="title"
                    />
                </label>
                <label>
                    <span>Descritpion: </span>
                    <textarea
                        type='text'
                        name="description"
                    ></textarea>
                </label>
                <div className={style.btn}>
                    <div className={style.btns}>
                        <button type="submit">Add </button>
                        <button onClick={props.onCloseModal}>Close </button>
                    </div>
                </div>
            </div>
        </>
    )
};
