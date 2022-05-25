import './Notes.css';
import { useEffect, useState } from 'react';
import Note from './Note/Note';
import Modal from '../Modal/Modal';
import axios from '../../axios';

export default function Notes(props) {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        fetchNotes()
    }, [])

    const fetchNotes = async () => {
        const res = await axios.get('/notes')
        const newNotes = res.data
        setNotes(newNotes)
    }

    const addNote = async (note) => {
        const newNotes = [...notes]
        const res = await axios.post('/notes', note)
        newNotes.push(res.data)
        setNotes(newNotes)
    }

    const toggleModal = (e) => {
        setShowModal(!showModal);
    };

    return (
        <>
            {showModal ? (
                <div className='position'>
                    <Modal
                        onAdd={note => addNote(note)}
                        onCloseModal={toggleModal}
                    />
                </div>) : <button onClick={toggleModal} className='add-note'>Add Note</button>}

            <div className='container'>
                <h3 className='title'>Twoje notatki:</h3>
                <div className=''>
                    <div className='notes'>
                        {notes.map(note => (
                            <Note
                                key={note._id}
                                id={note._id}
                                title={note.title}
                                description={note.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
