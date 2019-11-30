
import React from 'react';
import Gallery from "react-photo-gallery";
import { withRouter } from 'react-router-dom';

const BasicRows = () => <Gallery photos={[
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
    }
]} />;


class PhotoWall extends React.Component {

    render() {

        this.routeLocation = this.props.location.pathname;
        // console.log(this.props.location.pathname)
        const PhotoGallery = determinePhotos;
        return (

            <div className="photoWall" >
                <PhotoGallery />
                
            </div>
        );
    }

}
export default withRouter(PhotoWall)

function determinePhotos(routeLocation) {
    var photoGallery = <Gallery photos={[
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 2,
            height: 3
        }, {
            src: "https://miro.medium.com/max/4288/0*vWDGffKyCg5E2Lhz",
            width: 4,
            height: 3
        }
    ]} />;
    return photoGallery;
}