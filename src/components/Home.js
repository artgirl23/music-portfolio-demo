import { useState } from "react";
import MusicCard from "./MusicCard"; 

export default function Home({ musicList }) {
    const [genreFilter, setGenreFilter] = useState("Rock");
    let filteredMusic 
  if (genreFilter === "All") {
    filteredMusic = musicList;
  } else {
    filteredMusic = musicList.filter(music => music.genre === genreFilter);
  }

    return (
        <div>
            <div>
            <button className="btn btn-primary me-2" onClick={() => setGenreFilter("All")}>All</button>
            <button className="btn btn-primary me-2" onClick={() => setGenreFilter("Rock")}>Rock</button>
            <button className="btn btn-primary me-2" onClick={() => setGenreFilter("R&B")}>R&B</button>
            <button className="btn btn-primary me-2" onClick={() => setGenreFilter("Hip-Hop")}>Hip-Hop</button>
            <button className="btn btn-primary me-2" onClick={() => setGenreFilter("Country")}>Country</button>
            <button className="btn btn-primary" onClick={() => setGenreFilter("Pop")}>Pop</button>
            </div>
            {filteredMusic.map( music => (
            <MusicCard music={music} />
            ) ) }
        </div>
   
    )
}