import { useEffect } from "react"

export default function Player(props) {

    useEffect(() => {
        console.log('Using effect for iframe')
       }, 
    [])

    return(
        <div>
            <iframe width="720" height="405" src={"https://www.youtube.com/embed/" + props.videoId + "?autoplay=1&fs=0"} 
            title="YouTube video player" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen></iframe>
        </div>
    )
}
