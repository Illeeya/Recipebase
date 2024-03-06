const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Recipe Base
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Recipe List
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Add Recipe
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Favorites
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Settings
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        Setting 1
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Setting 2
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Setting 3
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Setting 4
                                    </a>
                                </div>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input
                                className="form-control me-sm-2"
                                type="search"
                                placeholder="Search"
                            />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
