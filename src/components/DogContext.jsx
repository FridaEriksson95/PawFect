import { createContext, useContext, useEffect, useState } from "react";

const DogContext = createContext();

export const DogProvider = ({children}) => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchDogs = async () => {
            try{
                const response = await fetch('https://api.jsonbin.io/v3/b/68d255a043b1c97be94caa84', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const data = await response.json();

                const dogsArray = data.record?.record || [];
                setDogs(dogsArray);
            } catch(err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDogs();
    }, []);

    return (
        <DogContext.Provider value={{dogs, loading}}> 
        {children} </DogContext.Provider>
    )
}

export const useDogs = () => useContext(DogContext);