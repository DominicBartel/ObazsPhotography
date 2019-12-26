import React from 'react';
import PhotoWall from "../components/gallery";



class Favorites extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Favorites" >
                fav
                <PhotoWall />
            </div>
        );
    }

}

export default Favorites;

