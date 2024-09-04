import styled from "styled-components";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { FaMinusCircle } from "react-icons/fa";

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

    const savedSearches = useLoaderData();
    
    const DeleteItem = async (id) => {
        await axios.delete(`/books/${id}`)
        .then(console.log("deleted?!"));
    }

    return (
        <div>
            <h1>Saved searches</h1>
            {savedSearches != undefined && savedSearches.map((savedItem, index) => (
                <BookList key={index}>
                    <FaMinusCircle onClick={() => DeleteItem(savedItem.id)}/>
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