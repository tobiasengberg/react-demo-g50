import { useEffect, useState } from "react";
import BookSearch from './BookSearch';
import SavedSearches from './SavedSearches';
import axios from "axios";

const Book = () => {
    const [listElements, setListElements] = useState([]);
    const [savedSearches, setSavedSearches] = useState([]);
    
    useEffect(() => {
        axios.get('/books')
        .then(response => setSavedSearches(response.data));
    }, [])
    
    return (
        <div>
            <SavedSearches savedSearches={savedSearches} setSavedSearches={setSavedSearches}/>
            <BookSearch 
            listElements={listElements} 
            setListElements={setListElements} />
        </div>
    )
}

export default Book;