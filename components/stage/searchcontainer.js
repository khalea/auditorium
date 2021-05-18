import SearchList from './searchlist'
import SearchBar from './searchbar'
import { searchVideos } from "../../pages/api/search"; 

import { useEffect, useState } from 'react'

export default function SearchContainer(props) {

    const [query, setQuery] = useState("")
    const [results, updateResults] = useState([])

    let handleSearch = async (query) => {
        const response = await searchVideos(query)
        updateResults(response.data.items)
        console.log(results)
    }

    return(
        <div>

            <SearchBar handleSearch={handleSearch} />
            <SearchList queueFunc={props.queueFunc} data={results}/>

        </div>
    )
}

