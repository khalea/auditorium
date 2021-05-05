
import Container from '../components/container'
import Player from '../components/stage/player'
import Queue from '../components/stage/queue'

import TestQueue from "../data/stage/test-queue.json"

import { useEffect, useState } from 'react'

export default function Stage(props) {

    let videoData = TestQueue
    
    const [currentSongId, setCurrentSong] = useState(videoData[0].videoId)

    useEffect(() => {
        console.log('Mounted, State Changed, or Unmounted')
    })

    const playNext = () => {
        videoData.shift()

        if (videoData.length > 0) {
            setCurrentSong(videoData[0].videoId)
        }
    }
    
    return(
        <Container>

                <h1>{props.title} by {props.owner}</h1>

                <div className="w-full">
                    
                    <Player
                        videoId={currentSongId}
                        onEnd={playNext}
                    />
                    
                    <Queue data={videoData} />
                </div>


        </Container>
    )
}

/*

ToDo
- Add message when no songs are in queue

*/