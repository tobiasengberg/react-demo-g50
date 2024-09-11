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

    // Här använder vi state för att se vilket index vi ska uppdatera
  const [editIndex, setEditIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
    
    const DeleteItem = async (id) => {
        await axios.delete(`/books/${id}`)
        .then(console.log("deleted?!"));
    }

    // Funktion för att uppdatera index staten

    const handleEdit = (index, title) => {
    setEditIndex(index); // här sätter vi indexen i edit
    setEditedTitle(title); // har flyttar vi in det nya värdet i staten
  };

    //Spara det nya värdet till databasen 
      const saveEdit = async (id) => {
    await axios
      .put(`/books/${id}`, { title: editedTitle })
      .then(() => {
        console.log("Updated");
      });
    setEditIndex(null); // här går vi ut från editmode
  };

    return (
        <div>
            <h1>Saved searches</h1>
            {savedSearches != undefined && savedSearches.map((savedItem, index) => (
                <BookList key={index}>
                    <FaMinusCircle onClick={() => DeleteItem(savedItem.id)}/>
                    <p >{savedItem.creator}</p>
                    <p >{savedItem.date}</p>

                    {editIndex === index ? (
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        />
                    ):(
                    <P onClick={() => handleEdit (index, savedItem.title)}>
                        {savedItem.title}
                    </P>
                    )}
                    <p>{savedItem.publisher}</p>

                    
                    {editIndex === index && (
                      <button onClick={() => saveEdit(savedItem.id)}>Save</button>
                    )}
                   </BookList>

                    <p >{savedItem.title}</p>
                    <p >{savedItem.publisher}</p>
                </BookList>
            ))}
        </div>
    )
};

export default SavedSearches;
