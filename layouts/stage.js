
import styles from '../styles/Home.module.css'
import Player from '../components/stage/player'

export default function Stage(props) {
    return(
        <div className={styles.container}>

                <h1>{props.title} by {props.owner}</h1>
                <Player
                    source="https://www.youtube.com/embed/xqYFU1_SiBo?autoplay=1&fs=0"
                />

        </div>
    )
}

