import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Albumhomepage from "./pages/Albumhomepage";
import Albumdetailpage from "./pages/Albumdetailpage";
import AddPhotosPage from "./pages/AddPhotosPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="register" element={<Registerpage />} />
                    <Route path="login" element={<Loginpage />} />
                    <Route path="albumpage" element={<Albumhomepage />} />
                    <Route path="album/:id" element={<Albumdetailpage />} />
                    <Route path="album/:id/add" element={<AddPhotosPage />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;

/* 

next tasks:

1-create a Form component for both Login and Register pages

*/
