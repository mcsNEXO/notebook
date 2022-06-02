import React, { useState } from 'react';
import style from './EditModal.module.css';
import { validate } from '../validation/validations'

export default function Modal(props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.description);
    const [errors, setErrors] = useState({
        title: '',
        desc: ''
    })

    const setValueHandler = (val, name) => {
        const value = val.target.value
        let rule = ['required', { rule: 'min', length: 0 }];;
        switch (name) {
            case 'title': {
                rule[1].length = 3
                const { error } = validate(rule, value);
                setErrors({ title: error })
                return setTitle(value)
            }
            case 'description': {
                rule[1].length = 5
                const { error } = validate(rule, value);
                setErrors({ desc: error })
                return setDesc(value);
            }
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
                            className={!errors.title ? '' : style.errorBorder}
                        />
                        {errors.title ? <div className={style.error}>{errors.title}</div> : null}
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
                            className={!errors.desc ? '' : style.errorBorder}
                        ></textarea>
                        {errors.desc ? <div className={style.error}>{errors.desc}</div> : null}
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
