import { useEffect, useState } from "react";
import BookSearch from './BookSearch';
import SavedSearches from './SavedSearches';
import { Outlet, Link } from "react-router-dom";

const Book = () => {

    return (
        <>
            <nav>
                <h3>Books</h3>
                <Link to="/book/search">Search</Link>
                <Link to="/book/saved">Saved</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Book;