
import styles from '../styles/Home.module.css'
import Container from '../components/container'
import Player from '../components/stage/player'
import Queue from '../components/stage/queue'

export default function Stage(props) {
    return(
        <Container>

                <h1>{props.title} by {props.owner}</h1>
                <Player
                    source="https://www.youtube.com/embed/xqYFU1_SiBo?autoplay=1&fs=0"
                />
                <Queue />


        </Container>
    )
}

