
import Container from '../components/container'
import Player from '../components/stage/player'
import Queue from '../components/stage/queue'
import TestQueue from "../data/stage/test-queue.json"
import SearchContainer from '../components/stage/searchcontainer'
import { useState } from 'react'

export default function Stage(props) {

    const [videoData, updateVideoData] = useState([])
    const [currentSongId, setCurrentSong] = useState(null)

    const playNext = () => {        
        videoData.shift()

        if (videoData.length > 0) {
            setCurrentSong(videoData[0].videoId)
        }
    }

    const addToQueue = (video) => {
        updateVideoData(videoData => [...videoData,
        {
            "videoId": video.id.videoId,
            "title": video.snippet.title,
            "channelTitle": video.snippet.channelTitle,
            "thumbnail": video.snippet.thumbnails.default.url
        }
        ])

        if (currentSongId == null) {
            console.log("No song playing yet")
            setCurrentSong(video.id.videoId)
        } 
    }

    if (videoData.length > 0) {
        return (
            <Container>
    
                <h1>{props.title} <span className="font-light">by</span> {props.owner}</h1>
    
                <div className="flex flex-row">
    
    
                    <div className="flex flex-col items-center pr-2 w-8/12">
                        <Player
                            videoId={currentSongId}
                            onEnd={playNext}
                        />
    
                        <SearchContainer queueFunc={addToQueue} />
                    </div>
    
                    <Queue data={videoData} />
    
                </div>
    
            </Container>
        )
    } else {
        return (
            <Container>
    
                <h1>{props.title} <span className="font-light">by</span> {props.owner}</h1>
    
                <div className="flex flex-row">
    
    
                    <div className="">
                        <div style={{width: '640px', height: '360px'}}></div>
                        <SearchContainer queueFunc={addToQueue} />
                    </div>
    
                    <Queue data={videoData} />
    
                </div>
    
            </Container>
        )
    }
}

/*

ToDo
- Add message when no songs are in queue
- Initial State (Empty Queue) -- Monitor the size of the queue

*/