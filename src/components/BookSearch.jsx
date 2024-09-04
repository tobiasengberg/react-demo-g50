import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const BookList = styled.div`
    display: flex;
    flex-direction: row;
    & p {
        padding: 0 1rem;
    }
`;

const BookSearch = () => {
    
    const [listElements, setListElements] = useState([]);
    const [newFirst, setNewFirst] = useState();
    const [newLast, setNewLast] = useState();
    const [searchParams, setSearchParams] = useState({
        firstName: "Ludwig",
        lastName: "Wittgenstein"
    })
    let searchString = `http://libris.kb.se/xsearch?query=förf:(${searchParams.firstName}+${searchParams.lastName})&format=json`;

    useEffect(() => {
        axios.get(searchString)
        .then((response) =>  {
            setListElements(response.data.xsearch.list);
            console.log(response);
        });
    }, [searchParams]);


    const changeSearch = () => {
        setSearchParams({
            firstName: newFirst,
            lastName: newLast
        })
    };

    const addSearch = async (index) =>{
        await axios.post('/books', {
            creator: `${listElements[index].creator}`,
            date: `${listElements[index].date}`,
            title:`${listElements[index].title}`,
            publisher:`${listElements[index].publisher}`,
        })
        .then(response => console.log(response));
    };

    return (
        <div>
            <h1>Book search</h1>
            {listElements != undefined && listElements.map((listItem, index) => (
                <BookList key={index} value={index} onClick={() => addSearch(index)}>
                    <p >{listItem.creator}</p>
                    <p >{listItem.date}</p>
                    <p >{listItem.title}</p>
                    <p >{listItem.publisher}</p>
                </BookList>
            ))}
            <form>
                <label htmlFor="new-first">First name:</label>
                <input id="new-first" type="text" 
                onChange={e => setNewFirst( e.target.value)} 
                value={newFirst}/>
                <label htmlFor="new-last">Last name:</label>
                <input id="new-last" type="text"
                onChange={e => setNewLast( e.target.value)} 
                value={newLast}/>
            </form>
            <button onClick={changeSearch}>Search</button>
        </div>
    )
}

export default BookSearch;