import { useEffect, useState } from "react";
import { Song } from "./Song";



export const List = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.feed.entry[0]["im:name"].label)
            setData(data.feed.entry);
        });
    }
    , []);

    let refreshPage = () => {
        window.location.reload(false);
    }
    
    return (
        
        <div class="max-w-[900px] w-[95%] mx-auto items-center flex flex-col gap-1">
                <div className="flex justify-start align-center pt-2 px-3 mt-2 gap-2  ">
                    <input type="text" className="p-3 rounded-md" placeholder="Search" onKeyDown={
                                (e) => {
                    setData(data.filter((item) => {
                        return item["im:name"].label.toLowerCase().includes(e.target.value.toLowerCase())
                    }
                                ))
                            }}
                             />
                             <button className="p-2 px-4 border text-white rounded-md hover:bg-neutral-50 hover:text-black" onClick={refreshPage}>Reset</button>
                </div>
            <ol className="flex flex-col max-w-[95%] items-center">
                {data.map((item, index) => {
                    return <Song item={item} rank={index} key={index} />;
                }
                )}
            </ol>
        </div>
    );
}

