import React from 'react';
import s from './App.module.scss';
import SiteHeader from "./components/SiteHeader";
import {BrowserRouter as Router} from 'react-router-dom';
import Intro from "./components/Intro";
import Categories from "./components/Categories";
import Providers from "./components/Providers";
import Games from "./components/Games";
import Search from "./components/Search";

const App = () => {
    return (
        <div className={s.container}>
            <Router>
                <SiteHeader/>
                <Intro/>
                <Categories/>
                <div className={s["search-providers-wrapper"]}>
                    <Providers/>
                    <Search/>
                </div>
                <Games/>
            </Router>
        </div>
    );
}

export default App;
