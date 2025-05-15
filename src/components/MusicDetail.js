import { useParams } from "react-router-dom";


export default function MusicDetail({ musicList }) {
    let { musicId } = useParams();
    musicId = parseInt(musicId)

    const music = musicList.find(m => m.id === musicId)

    if(!music) {
        return <h2>Song Not Found</h2>
    }
    
    return (
        <div>
            <h3>{ music.name }</h3>
            <p>{ music.artist }</p>
            <p>{ music.genre }</p>
            <p>{ music.rating }</p>
        </div>
    )
}