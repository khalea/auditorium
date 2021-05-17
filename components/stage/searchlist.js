import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SearchList(props) {

    let results = props.data
    
    return(
        <div className="">

            <h3 className="text-lg font-bold">Results</h3>

            {
                results.map(item => {
                    return (
                        <div key={item.id.videoId} className="flex flex-row py-1 space-x-2">

                            <Image 
                                src={item.snippet.thumbnails.default.url}
                                alt="Music video thumbnail"
                                width={120}
                                height={90}
                            />

                            <div className="flex flex-col">
                                <h3 className="text-md font-semibold">{item.snippet.title}</h3>
                                <p className="text-sm font-light">{item.snippet.channelTitle}</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}