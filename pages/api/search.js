import axios from 'axios'

const youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?q="
const apiKey = process.env.GOOGLE_API_KEY

export const searchVideos = (input) => {
    console.log('Searching for: ' + input)
    const url = youtubeAPI + input + "&type=video&key=" + apiKey
    console.log(url)
    axios.get(url)
        .then(res => {
            
            let results = JSON.stringify(res.data)
            console.log(results)
            
        })

}

/*

Example
https://youtube.googleapis.com/youtube/v3/search?q=hozier&key=AIzaSyCSBDNEwB6ghK9TVr-mjADEzzZkneEaUt0

*/