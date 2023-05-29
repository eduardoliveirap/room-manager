import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/salas" element={<Salas/>}/>
                        <Route path="/responsaveis" element={<Responsaveis/>}/>
                        <Route path="/eventos" element={<Evento/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}