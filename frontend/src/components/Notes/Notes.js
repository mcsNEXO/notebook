import './Notes.css'
import Note from './Note/Note'

export default function Notes(props) {
    return (
        <>
            <button className='add-note'>Add Note</button>
            <div className='container'>
                <h3 className='title'>Twoje notatki:</h3>
                <div className=''>
                    <div className='notes'>
                        <Note />
                    </div>
                </div>
            </div>
        </>
    )
};
