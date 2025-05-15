export default function RandomMusic({ musicList }) {
    const randomMusic = musicList[Math.floor(Math.random() * musicList.length)]
    return (
        <div>
            <h5>You should listen to ...</h5>
            <h2 className="display-1">{randomMusic.name}</h2>
        </div>
    )
}