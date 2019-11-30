import React from 'react';
import Gallery from "react-photo-gallery";
import {photos} from "../photos";

const BasicRows = () => <Gallery photos={photos}/>;
function Portraits() {
    return ( 
    
    <div className = "Portraits" >
        <BasicRows />
    </div>
    );
}

export default Portraits;