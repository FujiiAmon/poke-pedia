import "./App.css";
import { GetData } from "./components/getData";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <GetData />
        </div>
    );
}

export default App;
