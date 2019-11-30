import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import {photos} from "./components/photos";
import './App.css';

const BasicRows = () => <Gallery photos={photos}/>;
function App() {
    return ( 
    
    <div className = "App" >
        <BasicRows />
    </div>
    );
}

export default App;