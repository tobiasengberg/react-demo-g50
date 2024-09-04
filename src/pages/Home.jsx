import { useContext } from "react";
import Branding from "../components/Branding";
import { UserContext } from "./Root";

const Home = () => {
    const UserName = useContext(UserContext);

    return ( 
        <>
            <h1>Welcome here, {UserName}</h1>
            <Branding title="Products">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quasi iusto alias nostrum voluptatum suscipit iure! Dicta veritatis sint molestias laborum? Dolorum possimus impedit ullam, omnis nam laboriosam vero quam fugit dignissimos accusamus nostrum?</p>
            </Branding>
        </>
    )
}

export default Home;