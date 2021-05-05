import { useState } from "react"


export default function queue(props) {
    let videos = props.data
   
    return (
        <div className="max-w-sm">
            {
                videos.map(item => {
                    return (
                        <div key={item.id} className="flex flex-row items-center">
                            <h1 className="text-lg">{item.id}</h1>
                            <p>{item.videoId}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}