import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="register" element={<Registerpage />} />
                <Route path="login" element={<Loginpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
