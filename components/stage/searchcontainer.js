import SearchList from './searchlist'
import SearchBar from './searchbar'
import { searchVideos } from "../../pages/api/search"; 

import { useState } from 'react'

export default function SearchContainer(props) {

    const [results, updateResults] = useState([])

    let handleSearch = async (query) => {
        const response = await searchVideos(query)
        updateResults(response.data.items)
    }

    return(
        <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-bold">Results</h3>
            <SearchBar handleSearch={handleSearch} />
            <SearchList queueFunc={props.queueFunc} data={results}/>

        </div>
    )
}

// Need to set current song if there is none