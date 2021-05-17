import SearchList from './searchlist'
import SearchBar from './searchbar'
import { search, searchVideos } from "../../pages/api/search"; 

import { useEffect, useState } from 'react'

export default function SearchContainer() {

    const [query, setQuery] = useState("")
    const [results, updateResults] = useState([])

    let handleSearch = async (query) => {
        const response = await searchVideos(query)
        // Array of Items
        updateResults(response.data.items)
        console.log(results)
    }

    return(
        <div>

            <SearchBar handleSearch={handleSearch} />
            <SearchList data={results}/>

        </div>
    )
}

