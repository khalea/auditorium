import { useState } from "react"
import TestQueue from "../../data/stage/test-queue.json"

export default function queue(props) {
    let videos = TestQueue
   
    return (
        <div className="max-w-sm">
            {
                videos.map(item => {
                    return (
                        <div className="flex flex-row items-center">
                            <h1 className="text-lg">{item.id}</h1>
                            <p>{item.url}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}