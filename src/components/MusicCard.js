import { Link } from "react-router-dom";

function MusicCard ({music}) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{music.name}</h4>
            <h4>{music.artist}</h4>
            <h5>{music.genre}</h5>
            <p>{music.mood}</p>
            <p>{music.vibe}</p>
            <p>{music.rating}</p>
            <Link to={"/music/" + music.id}>Details</Link>
        </div>
    )

}

export default MusicCard;