import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import './assets/scss/app.scss';
import React from "react";

export const StoreContext = React.createContext(null);

const App = () => {
    const [cart, setCart] = React.useState([]);
    return (
        <StoreContext.Provider value={{cart, setCart}}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </StoreContext.Provider>
    );
};

export default App;