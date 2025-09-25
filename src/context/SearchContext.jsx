import { createContext, useContext, useState } from "react";

//To use searchelement from children page but located on rootlayout
const SearchContext = createContext();

export function SearchProvider({ children}) {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);