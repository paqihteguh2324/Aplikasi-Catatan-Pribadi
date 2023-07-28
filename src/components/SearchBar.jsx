import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    function handleSearch(keyword) {
        setSearchParams({ title : keyword });
    }
      return (
            <div className="search-bar">
                <input
                    onChange={(event) => handleSearch(event.target.value)}
                    type="text"
                    placeholder="Cari Catatan"
                />
            </div>
        );   
}

export default SearchBar;