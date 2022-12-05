import { useState } from "react";

export const Song = ({ item, rank }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    console.log(item)
    return (
        <li className=" border-2 shadow-lg rounded-md list-none relative m-2 py-2 w-11/12 mx-auto text-center md:flex md:justify-between md:p-5 md:text-left">
            {isFavorited ? (
                <button className="absolute bottom-0 left-0 p-3" onClick={() => setIsFavorited(false)}>⭐</button>
            ) : (
                <button className="absolute bottom-0 left-0 p-3 opacity-25 hover:opacity-50" onClick={() => setIsFavorited(true)}>⭐</button>
            )}
                <div className="flex flex-col">
                    <p className="text-2xl font-bold">{rank + 1}. <span>{item["im:name"].label}</span></p>
                    <p className="break-words">{item["im:artist"].label}</p>
                </div>
                <div class="flex justify-center shadow-md"><img src={item["im:image"][2].label} className="" alt={item["im:name"].label} /></div>
         
         
        </li>
    );
}