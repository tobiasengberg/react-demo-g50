import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const BookList = styled.div`
    display: flex;
    flex-direction: row;
    & p {
        padding: 0 1rem;
    }
`;

export const loader = async () => {
    return await axios.get('/books')
    .then(response => response.data);
}

const SavedSearches = () => {
    // const [savedSearches, setSavedSearches] = useState([]);
    // useEffect(() => {
    //     axios.get('/books')
    //     .then(response => setSavedSearches(response.data));
    // }, [])

    const savedSearches = useLoaderData();
    
    return (
        <div>
            <h1>Saved searches</h1>
            {savedSearches != undefined && savedSearches.map((savedItem, index) => (
                <BookList key={index}>
                    <p >{savedItem.creator}</p>
                    <p >{savedItem.date}</p>
                    <p >{savedItem.title}</p>
                    <p >{savedItem.publisher}</p>
                </BookList>
            ))}
        </div>
    )
};

export default SavedSearches;