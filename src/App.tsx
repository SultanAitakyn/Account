import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Users from "./components/about/Users";
import {Route} from "react-router-dom";
import SideBar from "./components/sider/Sider";
import Contacts from "./components/contacts/Contacts";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <div className="row mt-2">
                    <Route path="/main" component={Main}/>
                    <Route path='/about' component={Users}/>
                    <Route path='/contacts' component={Contacts}/>
                    <SideBar/>
                </div>
            </div>
        </div>
    );
}

export default App;
