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
        <div>

            <SearchBar handleSearch={handleSearch} />
            <SearchList queueFunc={props.queueFunc} data={results}/>

        </div>
    )
}

