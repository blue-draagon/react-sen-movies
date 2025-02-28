import './App.css';
import {Footer, Header} from "./components";
import {AppRoutes} from "./routes/AppRoutes";

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes />
            <Footer/>
        </div>
    );
}

export default App;
