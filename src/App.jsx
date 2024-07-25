import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikePage from "./pages/LikePage";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coup-de-coeur" element={<LikePage />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;