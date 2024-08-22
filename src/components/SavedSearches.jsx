import styled from "styled-components";

const BookList = styled.div`
    display: flex;
    flex-direction: row;
    & p {
        padding: 0 1rem;
    }
`;

const SavedSearches = ({savedSearches,setSavedSearches}) => {

    console.log(savedSearches);
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