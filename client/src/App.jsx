import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Albumhomepage from "./pages/Albumhomepage";
import Albumdetailpage from "./pages/Albumdetailpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="register" element={<Registerpage />} />
                <Route path="login" element={<Loginpage />} />
                <Route path="albumpage" element={<Albumhomepage />} />
                <Route path="album/:id" element={<Albumdetailpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/* 

next tasks:

1-create a Form component for both Login and Register pages
2-create a separated component for the logo

*/
