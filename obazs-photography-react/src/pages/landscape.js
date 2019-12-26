import React from 'react';
import PhotoWall from "../components/gallery";



class Landscape extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Landscape" >
                <PhotoWall />
            </div>
        );
    }

}

export default Landscape;

