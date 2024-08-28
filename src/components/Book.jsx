import { useEffect, useState } from "react";
import BookSearch from './BookSearch';
import SavedSearches from './SavedSearches';
import { Outlet, Link } from "react-router-dom";

const Book = () => {

    return (
        <>
            <header>
                <Link to="/book/search">Search for books</Link>
                <Link to="/book/saved">Saved searches</Link>
            </header>
            <Outlet />
        </>
    )
}

export default Book;