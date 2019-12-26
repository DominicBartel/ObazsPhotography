import React from 'react';
import PhotoWall from "../components/gallery";



class Portraits extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Portraits" >
                <PhotoWall />
            </div>
        );
    }

}

export default Portraits;

