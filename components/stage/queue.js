import { useState } from "react"

export default function queue(props) {
    let videos = props.data
   
    return (
        <div className="max-w-sm overflow-y-scroll">
            {
                videos.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-row items-center">
                            <h1 className="text-lg">{index + 1}</h1>

                            <div className="text-sm">
                                <h3 className="font-bold">{item.title}</h3>
                                <p>{item.channelTitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}