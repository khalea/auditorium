import ReactPlayer from 'react-player/youtube'
import { useEffect } from "react"

export default function Player(props) {

    const vidURL = "https://www.youtube.com/watch?v=" + props.videoId

    useEffect(() => {
       }, 
    [])

    return(
        <div className="py-4">
            

        <ReactPlayer 
            url={vidURL}
            playing={true}
            onEnded={props.onEnd}
            config={{
                youtube: {
                    playerVars: {
                        autoplay: 1,
                        controls: 1
                    }
                }
            }}
        />

        </div>
    )
}

/*

Todo
- Remove controls in prod

Considerations 
- How to ensure songs play synchronously for everyone? ie. Some people may log on in the middle of the video. How can I ensure everyone is on the same part of the video? Does SSR solve this? For now, I may be able to just force sync video when the song changes...

*/