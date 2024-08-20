import { useEffect, useState } from "react";
import axios from "axios";

const BookSearch = () => {
    const [listElements, setListElements] = useState([]);
    const [searchParams, setSearchParams] = useState({
        firstName: "Ludwig",
        lastName: "Wittgenstein"
    })
    let searchString = `http://libris.kb.se/xsearch?query=förf:(${searchParams.firstName}+${searchParams.lastName})&format=json`;

    useEffect(() => {
        axios.get(searchString)
        .then((response) =>  setListElements(response.data.xsearch.list));
    }, [searchParams]);

    const changeSearch = () => {
        setSearchParams({
            firstName: "Bertrand",
            lastName: "Russell"
        })
    }
    return (
        <div>
            <h1>Book search</h1>
            {listElements != undefined && listElements.map((listItem, index) => (
                <p key={index} >{listItem.title}</p>
            ))}
            <button onClick={changeSearch}>Change</button>
        </div>
    )
}

export default BookSearch;