import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom"

export const UserContext = createContext();

const Root = () => {
    const [userName, setUsername] = useState("Bert");

    return (
        <UserContext.Provider value={userName}>
        <div id="site-container">
            <header>
                <span className="site-logo">Library</span>
                <Link to="/">Home</Link>
                <Link to="book">Book</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
        </UserContext.Provider>
    )
}

export default Root;