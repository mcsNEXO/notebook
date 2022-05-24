import './Note.css'

export default function Note(props) {
    return (
        <div className="container-note">
            <div className='title-note'>
                Title
            </div>
            <div className='note-line'><hr className='line'></hr><button>Show Note</button><hr className='line'></hr></div>
            <div className='description'>
                Description:
                Description
            </div>
        </div >
    )
};
