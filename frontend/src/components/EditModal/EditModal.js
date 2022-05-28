import React, { useState } from 'react';
import style from './EditModal.module.css';

export default function Modal(props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.description);

    const titleHandler = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
    };

    const descHandler = (e) => {
        const newDesc = e.target.value
        setDesc(newDesc)
    };

    const editModal = () => {
        const note = {
            title: title,
            description: desc,
            _id: props._id
        }
        props.onEdit(note)
    }

    return (
        <>
            <div className={style.blurBg}></div>
            <div className={style.container}>
                <h3>Edit Note</h3>
                <label>
                    <span>Title: </span>
                    <input type='text'
                        name="title"
                        onChange={titleHandler}
                        value={title}
                    />
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
                        <button onClick={editModal}>Save</button>
                        <button onClick={props.toggleEditModal}>Close </button>
                    </div>
                </div>
            </div>
        </>
    )
};
