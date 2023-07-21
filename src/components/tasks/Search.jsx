const Search = () => {
    return (
        <div className="input-group mx-2 w-75 rounded boreder-1"  dir="ltr">
            <span
                className="input-group-text"
                id="addon1"
                style={{ backgroundColor: "#479F76" }}
            >
                <i className="fas fa-search"></i>
            </span>
            <input
                type="text"
                dir="rtl"
                className="form-control"
                placeholder="جستجو"
                aria-label="search"
                aria-describedby="addon1 "
                style={{fontSize:"14px"}}
            />
        </div>
    );
};
export default Search ;
