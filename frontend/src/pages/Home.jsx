import ProductList from "../features/Procuct-list/ProductList";
import Navbar from "../features/navbar/Navbar";

function Home() {
    return ( 
        <div>
            <Navbar><ProductList></ProductList></Navbar>
        </div>
     );
}

export default Home;