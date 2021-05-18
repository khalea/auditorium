import axios from 'axios'

const youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY


export const searchVideos = (input) => {
    const url = youtubeAPI + input + "&type=video&key=" + apiKey

    return axios.get(url)
        .catch(function (error) {
            console.log(error)
        })
}



export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        key: apiKey
    }
})

/*

Example
https://youtube.googleapis.com/youtube/v3/search?q=hozier&key=




*/