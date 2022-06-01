import React, { useState } from 'react';
import style from './Modal.module.css';

export default function Modal(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const titleHandler = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
    };

    const descHandler = (e) => {
        const newDesc = e.target.value
        setDesc(newDesc)
    };

    const addNote = () => {
        const newNote = {
            title: title,
            description: desc
        };
        props.onAdd(newNote);
        setTitle('');
        setDesc('');
        props.onCloseModal();
    };

    return (
        <>
            <div className={style.blurBg}></div>
            <div className={style.container}>
                <h3>Add Note</h3>
                <label>
                    <span>Title: </span>
                    <input type='text'
                        name="title"
                        onChange={titleHandler}
                        value={title}
                    />
                    {props.error ? (<div>tak</div>) : null}
                </label>
                <label>
                    <span>Descritpion: </span>
                    <textarea
                        type='text'
                        name="description"
                        onChange={descHandler}
                        value={desc}
                    ></textarea>
                </label>
                <div className={style.btn}>
                    <div className={style.btns}>
                        <button onClick={addNote}>Add </button>
                        <button onClick={props.onCloseModal}>Close </button>
                    </div>
                </div>
            </div>
        </>
    )
};
