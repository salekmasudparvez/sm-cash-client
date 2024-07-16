import { Helmet } from "react-helmet"
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const {user}=useAuth()
    
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>SM Cash | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                this is home:{user}
            </div>
        </div>
    );
};

export default Home;