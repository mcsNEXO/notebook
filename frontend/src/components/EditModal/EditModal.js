import React, { useState } from 'react';
import style from './EditModal.module.css';
import { validate } from '../validation/validations'

export default function Modal(props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.description);
    const [errorsTitle, setErrorsTitle] = useState()
    const [errorsDesc, setErrorsDesc] = useState()

    const setValueHandler = (val, name) => {
        let rule = ['required'];
        if (name === 'title') {
            rule.push({ rule: 'min', length: 3 })
            const value = val.target.value
            const { error } = validate(rule, value);
            if (error) setErrorsTitle(error)
            return setTitle(val.target.value)
        }
        else if (name === 'description') {
            rule.push({ rule: 'min', length: 5 })
            const value = val.target.value
            const { error } = validate(rule, value);
            if (error) setErrorsDesc(error)
            return setDesc(value)
        }
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
                    <div className={style.lbl}>
                        <input type='text'
                            name="title"
                            onChange={val => setValueHandler(val, 'title')}
                            value={title}
                            className={props.error ? style.errorTrue : ''}
                        />
                        {errorsTitle ? <div className={style.error}>{errorsTitle}</div> : null}
                    </div>
                </label>
                <label>
                    <span>Descritpion: </span>
                    <div className={style.lbl}>
                        <textarea
                            type='text'
                            name="description"
                            onChange={val => setValueHandler(val, 'description')}
                            value={desc}
                        ></textarea>
                        {errorsDesc ? <div className={style.error}>{errorsDesc}</div> : null}
                    </div>
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
