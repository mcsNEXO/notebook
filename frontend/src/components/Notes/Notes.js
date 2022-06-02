import './Notes.css';
import { useEffect, useState } from 'react';
import Note from './Note/Note';
import Modal from '../Modal/Modal';
import EditModal from '../EditModal/EditModal'
import axios from '../../axios';

export default function Notes(props) {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editNoteState, setEditNoteState] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const res = await axios.get('/notes');
        const newNotes = res.data;
        setNotes(newNotes);
    };


    const addNote = async (note) => {
        try {
            const newNotes = [...notes];
            const res = await axios.post('/notes', note);
            newNotes.push(res.data);
            setNotes(newNotes);
            toggleModal()
        } catch (e) {
            const x = e.response.data.message.split('title: ')[1];
            setError(x)
        }
    };


    const deleteNote = async (id) => {
        try {
            if (!window.confirm('Are you sure you want to delete this task?')) return
            const newNote = [...notes].filter(note => note._id !== id);
            await axios.delete(`/notes/${id}`);
            setNotes(newNote);
        } catch (e) {

        }

    };


    const editNote = async (note) => {
        try {
            await axios.put(`/notes/${note._id}`, note);
            const newNotes = [...notes];
            const index = notes.findIndex(x => x._id === note._id);
            if (index >= 0) {
                newNotes[index] = note;
                setNotes(newNotes);
            };
            toggleEditModal()
        }
        catch (e) {
            const x = e.response.data.message.split('title: ')[1];
            setError(x)
        };
    };


    const editNoteHandler = (note) => {
        setEditNoteState(note);
        toggleEditModal();
    };


    const toggleEditModal = (e) => {
        setShowEditModal(!showEditModal);
    };


    const toggleModal = (e) => {
        setShowModal(!showModal);
    };

    return (
        <>
            {
                showEditModal ? (
                    <div className='position'>
                        <EditModal
                            title={editNoteState.title}
                            description={editNoteState.description}
                            _id={editNoteState._id}
                            onEdit={editNote}
                            toggleEditModal={toggleEditModal}
                            error={error} />
                    </div>) : null
            }

            {
                showModal ? (
                    <div className='position'>
                        <Modal
                            onAdd={note => addNote(note)}
                            onCloseModal={toggleModal}
                            error={error}
                        />
                    </div>) :
                    <button onClick={toggleModal} className='add-note'>Add Note</button>
            }

            <div className='container'>
                <h3 className='title'>Twoje notatki:</h3>
                <div className=''>
                    <div className='notes'>
                        {notes.map(note => (
                            <Note
                                key={note._id}
                                _id={note._id}
                                title={note.title}
                                description={note.description}
                                onDelete={id => deleteNote(id)}
                                onEdit={editNoteHandler}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
