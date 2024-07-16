import { Helmet } from "react-helmet"

const Home = () => {

    
  
    return (
        <div className="h-[2000px]">
             <Helmet>
                <meta charSet="utf-8" />
                <title>SM Cash | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-3xl font-bold">
                this is home
            </div>
        </div>
    );
};

export default Home;