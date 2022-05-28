import './Note.css';
import { useState } from 'react';

export default function Note(props) {
    const [showDesc, setShowDesc] = useState(false);

    const toggleDesc = () => {
        setShowDesc(!showDesc);
    };
    const editHandler = () => {
        props.onEdit({
            title: props.title,
            description: props.description,
            _id: props._id
        })
    }
    return (
        <>
            <div className="container-note">
                <div className='title-note'>
                    {props.title}
                </div>
                <div className='note-line'>
                    <div className='buttons-note'>
                        <button onClick={editHandler} className='btn-edit'>Edit</button>
                        <button onClick={toggleDesc} className='btn-desc'>
                            {!props.showDesc ? 'Show Note' : 'Hide Note'}
                        </button>
                        <button className='btn-delete' onClick={() => props.onDelete(props._id)}>Delete</button>
                    </div>
                </div>
                {
                    showDesc ? (<div className='description'>
                        <h4>Description:</h4>
                        <div className='descNote'>{props.description}</div>
                    </div>) : null
                }
            </div >
        </>
    )
};
