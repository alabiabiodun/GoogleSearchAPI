import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /images, /search, /videos, /news
    const getResults = async (type) => {
        setLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });        

        const results = await response.json();
            //console.log(results);
            if(type.includes('/news')){
                setData(results.entries);
            }
            else if(type.includes('/image')){
                setData(results.image_results)
            }
            else setData(results.results)            
        setLoading(false);
    }

    //const values = {getResults, data, loading, searchTerm, setSearchTerm};

    return (
        <ResultContext.Provider value={{getResults, data, loading, searchTerm, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);