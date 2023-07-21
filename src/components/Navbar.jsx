import Search from "./tasks/Search";

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-dark shadow-lg m-auto" style={{backgroundColor:"#79DFC1"}}>
                <div className="container">
                    <div className="row w-100">
                        <div className="col">
                            <i class="fa-solid fa-clipboard mx-2 fs-5  " style={{color: "#146C43"}} ></i>
                            <span className="bold fs-5">تسک منیجر</span>
                        </div>
                        <div className="col">
                            <Search />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
};

export default Navbar;
