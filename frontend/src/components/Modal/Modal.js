import React, { useState } from 'react';
import style from './Modal.module.css';
import { validate } from '../validation/validations';

export default function Modal(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
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
    const addNote = () => {
        const newNote = {
            title: title,
            description: desc
        };
        props.onAdd(newNote);
        setTitle('');
        setDesc('');
        // props.onCloseModal();
    };

    return (
        <>
            <div className={style.blurBg}></div>
            <div className={style.container}>
                <h3>Add Note</h3>
                <label>
                    <span>Title: </span>
                    <div className={style.lbl}>
                        <input type='text'
                            className={!errors.title ? '' : style.errorBorder}
                            name="title"
                            onChange={val => setValueHandler(val, 'title')}
                            value={title}
                        />
                        {errors.title ? <div className={style.error}>{errors.title}</div> : null}
                    </div>
                </label>
                <label>
                    <span>Descritpion: </span>
                    <div className={style.lbl}>
                        <textarea
                            className={!errors.desc ? '' : style.errorBorder}
                            type='text'
                            name="description"
                            onChange={val => setValueHandler(val, 'description')}
                            value={desc}
                        ></textarea>
                        {errors.desc ? <div className={style.error}>{errors.desc}</div> : null}
                    </div>
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
