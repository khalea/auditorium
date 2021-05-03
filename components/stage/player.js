export default function Player(props) {
    return(
        <div>
            <iframe id="ytplayer" type="text/html" width="720" height="405"
            src={props.source}
            frameBorder="0" allowffullscreen="false"></iframe>
        </div>
    )
}
