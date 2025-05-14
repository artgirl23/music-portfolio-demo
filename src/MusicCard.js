
function MusicCard (props) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{props.music.name}</h4>
            <h4>{props.music.artist}</h4>
            <h5>{props.music.genre}</h5>
            <p>{props.music.mood}</p>
            <p>{props.music.vibe}</p>
            <p>{props.music.rating}</p>
        </div>
    )

}

export default MusicCard;