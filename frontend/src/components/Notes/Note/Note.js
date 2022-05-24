import './Note.css'

export default function Note(props) {
    return (
        <div className="container-note">
            <div className='title-note'>
                Title
            </div>
            <div className='note-line'>
                <hr className='line'></hr>
                <button onClick={props.toggleDesc}>
                    {!props.showDesc ? 'Show Note' : 'Hide Note'}
                </button>
                <hr className='line'></hr>
            </div>
            {props.showDesc ? (<div className='description'>
                Description:
                Description
            </div>) : null}
        </div >
    )
};
