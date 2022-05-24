import './Notes.css';
import { useState } from 'react';
import Note from './Note/Note';
import Modal from '../Modal/Modal';

export default function Notes(props) {
    const [showModal, setShowModal] = useState(false);
    const [showDesc, setShowDesc] = useState(false);
    const toggleModal = (e) => {
        setShowModal(!showModal);
    };

    const toggleDesc = () => {
        setShowDesc(!showDesc);
    };

    return (
        <>
            {showModal ? (
                <div className='position'>
                    <Modal
                        onCloseModal={toggleModal}
                    />
                </div>) : <button onClick={toggleModal} className='add-note'>Add Note</button>}

            <div className='container'>
                <h3 className='title'>Twoje notatki:</h3>
                <div className=''>
                    <div className='notes'>
                        <Note
                            toggleDesc={toggleDesc}
                            showDesc={showDesc}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
