
import Container from '../components/container'
import Player from '../components/stage/player'
import Queue from '../components/stage/queue'
import SearchBar from '../components/stage/searchbar'

import TestQueue from "../data/stage/test-queue.json"
import SearchContainer from '../components/stage/searchcontainer'
import { useEffect, useState } from 'react'

export default function Stage(props) {

    let videoData = TestQueue
    
    const [currentSongId, setCurrentSong] = useState(videoData[0].videoId)

    useEffect(() => {
    })

    const playNext = () => {
        videoData.shift()

        if (videoData.length > 0) {
            setCurrentSong(videoData[0].videoId)
        }
    }
    
    return(
        <Container>

            <h1>{props.title} <span className="font-light">by</span> {props.owner}</h1>

                <div className="flex flex-row">


                    <div className="">
                        <Player
                            videoId={currentSongId}
                            onEnd={playNext}
                        />

                        <SearchContainer />
                    </div>

                    <Queue data={videoData} />

                </div>
                
        </Container>
    )
}

/*

ToDo
- Add message when no songs are in queue
- Initial State (Empty Queue) -- Monitor the size of the queue

*/