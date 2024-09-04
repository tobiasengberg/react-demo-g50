import { UserContext } from "../pages/Root";
import { useContext } from "react";

const Branding = ({title, children}) => {

    const UserName = useContext(UserContext);
    return (
        <div>
            <h2>{title} + {UserName}</h2>
            {children}
            <footer><span>@Lexicon</span></footer>
        </div>
    )
}

export default Branding;