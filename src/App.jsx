import "./App.css";
import { GetData } from "./components/getData";
import { Navbar } from "./components/Navbar";
import { PageButton } from "./components/pageButton";

function App() {
    return (
        <div>
            <Navbar />
            <GetData />
            <PageButton />
        </div>
    );
}

export default App;
