import React from 'react';
import PhotoWall from "../components/photos";



class Landscape extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Landscape" >
                land
                <PhotoWall />
            </div>
        );
    }

}

export default Landscape;

