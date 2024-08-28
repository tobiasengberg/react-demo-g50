import { Link, Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div id="site-container">
            <header>
                <Link to="/">Home</Link>
                <Link to="book">Book</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default Root;