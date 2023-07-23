import { useState } from "react";
 import { useSearchParams  } from "react-router-dom";
const Search = ({handleSearch}) => {

    const [searchParams , setSearchParams] = useSearchParams() ;


    const updateSearch  = (e) => {

        setSearchParams({"filter" :e.target.value});
        
        handleSearch() ;
    }



    return (
        <div className="input-group mx-2 w-75 rounded boreder-1"  dir="ltr">
            <button
                // onClick={updateSearch}
                className="input-group-text"
                id="addon1"
                style={{ backgroundColor: "#479F76" }}
                onClick={handleSearch}
            >
                <i className="fas fa-search"></i>
            </button>
            <input
                type="text"
                dir="rtl"
                className="form-control"
                value={searchParams.get === ""  ? "" : searchParams.get("filter") }
                placeholder="جستجو"
                aria-label="search"
                onChange={updateSearch}
                aria-describedby="addon1 "
                style={{fontSize:"14px"}}
            />
        </div>
    );
};
export default Search ;
